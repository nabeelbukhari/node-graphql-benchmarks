"use strict";

const { compileQuery } = require("graphql-jit");
const { parse } = require("graphql");
const fetch = require("node-fetch");

const { createApolloSchema } = require("../../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

const cache = {};

module.exports = async ({ query }) => {
  cache[query] = cache[query] || compileQuery(schema, parse(query));

  // await fetch("http://localhost:3030");

  const result = await cache[query].query();

  // console.log("Returning result");

  return JSON.stringify(result);
};
