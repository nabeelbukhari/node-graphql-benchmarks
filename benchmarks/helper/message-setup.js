process.send = process.send || function () {};
pid = undefined;

const sendUsage = () => {
  process.send({
    memUsage: process.memoryUsage(),
    cpuUsage: process.cpuUsage(),
  });
};

process.on("message", function (msg) {
  if (msg === "get_usage") {
    sendUsage();
  } else if (msg === "kill") {
    if (pid) {
      process.kill(pid, "SIGKILL");
    }
    process.exit(0);
  }
});

module.exports = sendUsage;
