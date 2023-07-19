"use strict";

const { compileQuery } = require("graphql-jit");
const { parse } = require("graphql");
const fetch = require("node-fetch");

const { createApolloSchema } = require("../../lib/schemas/createApolloSchema");

const schema = createApolloSchema();

const cache = {};

module.exports = async ({ query }) => {
  let compiled = cache[query];
  if (!compiled) {
    // console.log("cache miss!");
    const document = parse(query);
    compiled = cache[query] = compileQuery(schema, document);
  }
  // fetch("http://localhost:3030").then();
  const ans = await compiled.query();
  // const response = JSON.stringify(ans);
  // console.log("returning response", response);
  return JSON.stringify(ans);
};
