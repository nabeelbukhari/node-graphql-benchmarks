"use strict";

const fastify = require("fastify")({});
const { spawn, Thread, Worker } = require("threads");
const os = require("os");
const create_rr = require('round-robin-algorithm')
const pool = create_rr()

const threads = [];
const threadsCount = os.cpus().length;

const cache = {};

// Declare a route
fastify.post('/graphql', async (req, reply) => {
  const query = req.body.query;
  // const start = performance.now();
  // console.log("received response ", response);
  const worker = pool.get();
  // worker.setCache(cache);
  reply.send(await worker.runQuery(query));
  // const end = performance.now();
  // console.log("Time till function end: ", end-start);
});

// Run the server!
const start = async () => {
  try {
    for (let i = 0; i < threadsCount; i++) {
      threads.push(spawn(new Worker("./helper/thread")));
    }
    for (let i = 0; i < threadsCount; i++) {
      pool.add(await threads.at(i));
    }
    await fastify.listen(4001);
  } catch (err) {
    Thread.terminate(graphql);
    process.exit(1);
  }
};
start();