"use strict";

const md5 = require("md5");
const { data } = require("../../lib/data");
const uws = require("uWebSockets.js");
uws
  .App()
  .post("/graphql", (res) => {
    res.end(JSON.stringify(data.map((x) => ({ ...x, md5: md5(x.name) }))));
  })
  .listen(4001, () => {});