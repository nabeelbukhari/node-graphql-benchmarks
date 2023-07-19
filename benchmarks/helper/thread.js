'use strict';

const { compileQuery } = require("graphql-jit");
const { parse } = require("graphql");
const fetch = require("node-fetch");

const { createApolloSchema } = require("../../lib/schemas/createApolloSchema");

const { expose } = require("threads/worker");

const schema = createApolloSchema();

const cache = {};
const obj = {
  cache: undefined,
  setCache: (cache) => {
    this.cache = cache;
  },
  runQuery: async (query) => {
    // console.log("cache: ", JSON.stringify(this.cache));

    let compiledQuery = cache[query];
    if (!compiledQuery) {
      // console.log("cache miss!");
      cache[query] = compiledQuery = compileQuery(schema, parse(query));
    }
  
    // await fetch("http://localhost:3030");
    
    const result = await compiledQuery.query();
  
    // console.log("Returning result");
  
    return JSON.stringify(result);
  }
};

console.log("Thread Initialized!");

expose(obj);