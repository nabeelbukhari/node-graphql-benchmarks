const { readdirSync } = require("fs");
const { join } = require("path");

const path = join(__dirname, "..", "benchmarks");
module.exports.choices = readdirSync(path, { withFileTypes: true })
  .filter((x) => !x.isDirectory() && !x.name.startsWith("yoga"))
  .map((x) => x.name.replace(".js", ""));
