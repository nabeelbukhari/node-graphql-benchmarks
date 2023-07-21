process.send = process.send || function () {};
const sendUsage = () => {
  process.send({
    memUsage: process.memoryUsage(),
    cpuUsage: process.cpuUsage(),
  });
};

process.on("message", function (msg) {
  if (msg === "get_usage") {
    sendUsage();
  }
});

module.exports = sendUsage;
