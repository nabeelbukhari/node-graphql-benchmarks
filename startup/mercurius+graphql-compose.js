"use strict";
const start = process.hrtime();

const Fastify = require("fastify");
const mercurius = require("mercurius");
const {
  createGraphqlComposeSchema,
} = require("../lib/schemas/createGraphqlCompose");

const schema = createGraphqlComposeSchema();

const app = Fastify();

app.register(mercurius, {
  schema,
});

const loadingTime = process.hrtime(start);

app.listen(4001, () => {
  const listenTime = process.hrtime(start);
  require("fs").writeFileSync(
    `${__filename}.txt`,
    `${loadingTime} | ${listenTime}\n`,
    { encoding: "utf-8", flag: "a" },
  );
  app.close();
});