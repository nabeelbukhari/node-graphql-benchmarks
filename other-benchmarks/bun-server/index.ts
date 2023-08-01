const { parse } = require("graphql");
const { compileQuery } = require("graphql-jit");
const fetch = require("node-fetch");
const { createApolloSchema } = require("../../lib/schemas/createApolloSchema");

const sendUsage = require("../../benchmarks/helper/message-setup");

// send resource stats before server start
sendUsage();

const schema = createApolloSchema();

const cache = {};

const server = Bun.serve({
  port: 4001,
  async fetch(req) {
    let query = await req.json();

    cache[query] = cache[query] || compileQuery(schema, parse(query.query));

    // await fetch("http://localhost:3030");

    const result = cache[query].query();

    return Response.json(result);
  },
});

console.log(`Listening on http://localhost:${server.port}...`);
