"use strict";

const { createServer } = require("http");

const { parse } = require("graphql");
const { compileQuery } = require("graphql-jit");
const { serve, json } = require("micro");
const fetch = require("node-fetch");

const { createApolloSchema } = require("../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

const cache = {};

const server = createServer(serve(async (req, res) => {

  let query = await json(req);

  cache[query] = cache[query] || compileQuery(schema, parse(query.query));

  // await fetch("http://localhost:3030");

  const result = await cache[query].query();

  res.end(JSON.stringify(result));
}));

server.listen(4001);
