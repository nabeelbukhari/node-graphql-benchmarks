"use strict";

const fastify = require("fastify")({});

const { resolve } = require("path");

const concurrentTasksPerWorker = parseInt(process.argv[2] || 10);
const idleTimeout = parseInt(process.argv[3] || 1000);

fastify.register(require("fastify-piscina"), {
  filename: resolve(__dirname, "./helper/worker.js"),
  idleTimeout,
});

const cache = {};

// Declare a route
fastify.post("/graphql", async (req, reply) => {
  const pool = fastify.piscina;

  // pool.on('drain', () => {
  //   console.log("pool drained");
  // });
  // pool.on('needsDrain', () => {
  //   console.log("pool needs drain");
  // });
  const query = req.body.query;

  // console.log("calling worker with query", query);
  const response = await fastify.runTask({ query });
  // console.log("received response ", response);
  reply.send(response);
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(4001);
  } catch (err) {
    process.exit(1);
  }
};
start();
