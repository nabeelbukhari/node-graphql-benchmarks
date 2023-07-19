"use strict";

const fastify = require("fastify")({});
const { Pool, spawn, Thread, Worker } = require("threads");

const pool = Pool(() => spawn(new Worker("./helper/thread")), { concurrency: 4});
const cache = {};

// Declare a route
fastify.post('/graphql', async (req, reply) => {
  const query = req.body.query;
  
  // const start = performance.now();
  // console.log("calling worker with query", query);
  // const thread = ;
  // console.log("received response ", response);
  reply.send(await pool.queue(graphql => graphql.runQuery(cache, query)));
  // const end = performance.now();
  // console.log("Time till function end: ", end-start);
});

// Run the server!
const start = async () => {
  try {
    await fastify.listen(4001);
  } catch (err) {
    pool.terminate(true);
    process.exit(1);
  }
};
start();