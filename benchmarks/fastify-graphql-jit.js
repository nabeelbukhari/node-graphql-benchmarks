"use strict";

const fastify = require("fastify")({});
const { compileQuery } = require("graphql-jit");

const { parse } = require("graphql");

const cache = {};

const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

fastify.post("/graphql", async (req, reply) => {
  const query = req.body.query;

  cache[query] = cache[query] || compileQuery(schema, parse(query));

  const result = await cache[query].query();

  reply.send(JSON.stringify(result));
});

fastify.listen(4001);
