"use strict";

const { parse } = require("graphql");
const { compileQuery } = require("graphql-jit");
const uws = require("uWebSockets.js");
const { createApolloSchema } = require("../lib/schemas/createApolloSchema");
const { Worker, isMainThread, threadId } = require('worker_threads');
const os = require('os');
const fetch = require("node-fetch");

const cache = {};

const schema = createApolloSchema();

if (isMainThread) {
  /* Main thread loops over all CPUs */
  /* In this case we only spawn two (hardcoded) */
  os.cpus().forEach(() => {
    /* Spawn a new thread running this source file */
    new Worker(__filename);
  });

  /* I guess main thread joins by default? */
} else {
  // const cache = {};
  uws
    .App()
    .post("/graphql", (res) => {
      readJson(
        res,
        (body) => {
          const { query } = body;
          let compiled = cache[query];
          if (!compiled) {
            // console.log("cache miss!");
            const document = parse(query);
            compiled = cache[query] = compileQuery(schema, document);
          }
          // fetch("http://localhost:3030").then();
          const ans = compiled.query({}, {}, {});
          res.end(JSON.stringify(ans));
        },
        () => {},
      );
    })
    .listen(4001, () => {
      // console.log('Listening from thread ' + threadId);
    });
}

function readJson(res, cb, err) {
  let buffer;
  /* Register data cb */
  res.onData((ab, isLast) => {
    let chunk = Buffer.from(ab);
    if (isLast) {
      let json;
      if (buffer) {
        try {
          json = JSON.parse(Buffer.concat([buffer, chunk]));
        } catch (e) {
          /* res.close calls onAborted */
          res.close();
          return;
        }
        cb(json);
      } else {
        try {
          json = JSON.parse(chunk);
        } catch (e) {
          /* res.close calls onAborted */
          res.close();
          return;
        }
        cb(json);
      }
    } else {
      if (buffer) {
        buffer = Buffer.concat([buffer, chunk]);
      } else {
        buffer = Buffer.concat([chunk]);
      }
    }
  });

  /* Register error cb */
  res.onAborted(err);
}
