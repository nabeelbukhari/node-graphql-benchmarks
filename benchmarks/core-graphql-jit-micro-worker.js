"use strict";

const { createServer } = require("http");
const { serve, json } = require("micro");
const { resolve } = require("path");
const piscina = require("piscina");
const sendUsage = require("./helper/message-setup");

// send resource stats before server start
sendUsage();

const pool = new piscina({
  filename: resolve(__dirname, "./helper/stream-worker.js"),
  idleTimeout: 10000,
});

const server = createServer(
  serve(async (req, res) => {
    const query = (await json(req)).query;
    const response = await pool.run({ query });
    res.end(response);
  }),
);

server.listen(4001);
