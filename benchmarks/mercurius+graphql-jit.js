"use strict";

const Fastify = require("fastify");
const mercurius = require("mercurius");
const sendUsage = require("./helper/message-setup");

// send resource stats before server start
sendUsage();

const { createMercuriusSchema } = require("../lib/schemas/createMercuriusSchema");

const {schema, resolvers} = createMercuriusSchema();

const app = Fastify();

app.register(mercurius, {
  schema,
  resolvers,
  jit: 1,
});

app.listen(4001);
