#!/usr/bin/env node

const { fork } = require("child_process");
const path = require("path");
const sleep = require("sleep");
const { fire } = require("./autocannon");

const PRINT_USAGE = false;

let memoryUsage = undefined;
let cpuUsage = undefined;

const getMemoryUsage = (memoryUsage) => {
  const min = Math.min(...memoryUsage);
  const max = Math.max(...memoryUsage);
  return { min, max };
};

const getCPUUsage = (cpuUsage) => {
  const min = cpuUsage.reduce((a, b) => (a.user < b.user ? a : b));
  const max = cpuUsage.reduce((a, b) => (a.user > b.user ? a : b));
  return {
    user: max.user - min.user,
    system: max.system - min.system,
  };
};

const printMemory = (memory) => {
  const total = memory / 1024 / 1024;
  return `${total.toFixed(2)}MB `;
};

const printMemoryUsage = (memoryUsage) => {
  if (memoryUsage) {
    console.log(cpuUsage);
  }
  console.log("Startup memory size: ", printMemory(memoryUsage.min));
  console.log("Max memory size: ", printMemory(memoryUsage.max));
};

const printCPUUsage = (cpuUsage) => {
  console.log("Total CPU usage (microseconds): ", cpuUsage);
};

const getResourceUsage = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        cpu: getCPUUsage(cpuUsage),
        memory: getMemoryUsage(memoryUsage),
      });
    }, 0);
  });
};

const doBench = async (opts, handler) => {
  memoryUsage = [];
  cpuUsage = [];
  const { default: ora } = await import("ora");
  const spinner = ora(`\nStarted ${handler}`).start();
  const forked = fork(path.join(__dirname, "..", "benchmarks", handler));
  forked.on("message", function (payload) {
    if (typeof payload === "string") {
      const state = payload;
      console.log("State: ", state);
      return;
    }
    memoryUsage.push(payload.memUsage.rss);
    cpuUsage.push(payload.cpuUsage);
    if (PRINT_USAGE) {
      console.log("\nMemory usage: ", printMemory(payload.memUsage.rss));
      console.log("CPU usage: ", payload.cpuUsage);
    }
  });

  try {
    spinner.color = "magenta";
    spinner.text = `Warming ${handler}`;
    await fire(opts, handler, getResourceUsage, false);
  } catch (error) {
    return console.log(error);
  } finally {
    spinner.color = "yellow";
    spinner.text = `Working ${handler}`;
  }

  try {
    forked.send("get_usage");
    await fire(opts, handler, getResourceUsage, true);
    forked.send("get_usage");
    forked.send("kill");
    spinner.text = `Results saved for ${handler}`;
    spinner.succeed();
    if (PRINT_USAGE) {
      const usage = await getResourceUsage();
      console.log("\nResource Usage: ");
      printMemoryUsage(usage.memory);
      printCPUUsage(usage.cpu);
    }
    return true;
  } catch (error) {
    return console.log(error);
  }
};

let index = 0;
const start = async (opts, list) => {
  if (list.length === index) {
    return true;
  }

  if (index != 0) {
    console.log("Waiting for 5 seconds so last process can exit!");
    sleep.sleep(5);
  }

  try {
    await doBench(opts, list[index]);
    index += 1;
    return start(opts, list);
  } catch (error) {
    return console.log(error);
  }
};

module.exports = start;
