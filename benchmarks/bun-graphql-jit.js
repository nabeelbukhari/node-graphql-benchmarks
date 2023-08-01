"use strict";
const { exec } = require("child_process");
const path = require("path");
const sendUsage = require("./helper/message-setup");

// send resource stats before server start
sendUsage();

// make sure that bun is installed
const execPath =
  "bun run " +
  path.join(__dirname, "..", "other-benchmarks/bun-server/") +
  "index.ts";
const forked = exec(execPath, (error, stdout, stderr) => {
  if (error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.log(`stderr: ${stderr}`);
    return;
  }
  console.log(`stdout: ${stdout}`);
});
console.log(execPath);
forked.on("exit", () => console.log("exited"));
pid = forked.pid;
