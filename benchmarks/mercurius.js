"use strict";

const Fastify = require("fastify");
const mercurius = require("mercurius");
const {
  createMercuriusSchema,
} = require("../lib/schemas/createMercuriusSchema");
const sendUsage = require("./helper/message-setup");

// send resource stats before server start
sendUsage();

const { schema, resolvers } = createMercuriusSchema();

const app = Fastify();

app.register(mercurius, {
  schema,
  resolvers,
});

app.listen(4001);
