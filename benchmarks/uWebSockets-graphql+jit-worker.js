"use strict";

const uws = require("uWebSockets.js");
const { resolve } = require("path");
const piscina = require("piscina");
const sendUsage = require("./helper/message-setup");

// send resource stats before server start
sendUsage();

const pool = new piscina({
  filename: resolve(__dirname, "./helper/stream-worker.js"),
  idleTimeout: 10000,
});

uws
  .App()
  .post("/graphql", async (res) => {
    let aborted = false;
    await readJson(
      res,
      async (body) => {
        const { query } = body;
        const response = await pool.run({ query });
        if (!aborted) res.cork(() => res.end(response));
      },
      () => {
        aborted = true;
        console.log("Aborted!");
      },
    );
  })
  .listen(4001, () => {
    // console.log('Listening from thread ' + threadId);
  });

async function readJson(res, cb, err) {
  let buffer;
  /* Register data cb */
  res.onData(async (ab, isLast) => {
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
        await cb(json);
      } else {
        try {
          json = JSON.parse(chunk);
        } catch (e) {
          /* res.close calls onAborted */
          res.close();
          return;
        }
        await cb(json);
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
