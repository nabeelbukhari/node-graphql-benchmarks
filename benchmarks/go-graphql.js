"use strict";
const { exec } = require("child_process");
const path = require("path");
const sendUsage = require("./helper/message-setup");

// send resource stats before server start
sendUsage();

// build the executable before running benchmark
// go build -ldflags "-s -w" server.go
const forked = exec(
  path.join(__dirname, "..", "other-benchmarks/go-gql/") + "server",
  (error, stdout, stderr) => {
    if (error) {
      console.log(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  },
);
console.log(path.join(__dirname, "..", "other-benchmarks/go-gql/server.go"));
forked.on("exit", () => console.log("exited"));
pid = forked.pid;
