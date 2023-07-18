# TL;DR

- graphql-jit helps
- apollo-server adds overhead
- tracing resolvers kills performance
- type-graphql adds overhead

# Introduction

This is a fork of [node-graphql-benchmark](https://github.com/benawad/node-graphql-benchmarks) repo and has following changes:

- Changed default setting for benchmark as this repo contains worker-thread examples so it takes more time to start.
- All benchmarks that perform slower than http server are moved to others folder subfolder of benchmark folder.
- Dependencies updates

# Explanation

For further details, please check out [this video](https://www.youtube.com/watch?v=JbV7MCeEPb8).

# Usage

```
git clone https://github.com/nabeelbukhari/node-graphql-benchmarks
cd benchmarks
npm install
npm start
```

# Benchmarks
machine: Apple M1 with 16 GB RAM
duration: 20s
connections: 5
pipelining: 2

| Server                                                                                                                                        | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                                                           | --:        | :-:     | --:           |
| [go-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/go-graphql.js)                                         | 69368.0    | 0.01    | 115.24        |
| [fastify-graphql-jit-worker](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit-worker.js)         | 19992.0    | 0.03    | 136.12        |
| [uWebSockets-graphql+jit-worker](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/uWebSockets-graphql+jit-worker.js) | 11484.8    | 0.37    | 77.41         |
| [uWebSockets-graphql+jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/uWebSockets-graphql+jit.js)               | 10766.4    | 0.43    | 72.56         |
| [core-graphql-jit-buf](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-buf.js)                     | 10221.6    | 0.18    | 69.18         |
| [core-graphql-jit-micro](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-micro.js)                 | 9714.4     | 0.27    | 65.74         |
| [core-graphql-jit-buf-fjs](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-buf-fjs.js)             | 9679.2     | 0.40    | 65.50         |
| [core-graphql-jit-str](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-str.js)                     | 9624.0     | 0.20    | 65.13         |
| [fastify-graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit.js)                       | 8634.6     | 0.78    | 58.79         |
| [benzene-http](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-http.js)                                     | 5821.6     | 1.23    | 39.69         |
