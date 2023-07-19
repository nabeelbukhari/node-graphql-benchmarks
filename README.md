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
duration: 15s
connections: 10
pipelining: 1

| Server                                                                                                                                            | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                                                               | --:        | :-:     | --:           |
| [go-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/go-graphql.js)                                             | 67881.6    | 0.01    | 112.77        |
| [uWebSockets-graphql+jit-worker](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/uWebSockets-graphql+jit-worker.js)     | 23403.2    | 0.01    | 157.70        |
| [core-graphql-jit-micro-worker](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-micro-worker.js)       | 23144.0    | 0.01    | 156.65        |
| [fastify-graphql-jit-worker](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit-worker.js)             | 20261.9    | 0.03    | 137.94        |
| [fastify-graphql-jit-threads](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit-threads.js)           | 17952.3    | 0.06    | 122.21        |
| [uWebSockets-graphql+jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/uWebSockets-graphql+jit.js)                   | 10325.6    | 0.23    | 69.59         |
| [core-graphql-jit-buf](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-buf.js)                         | 9754.4     | 0.26    | 66.01         |
| [core-graphql-jit-str](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-str.js)                         | 9741.6     | 0.26    | 65.93         |
| [core-graphql-jit-micro](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-micro.js)                     | 9602.9     | 0.27    | 64.99         |
| [core-graphql-jit-buf-fjs](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-buf-fjs.js)                 | 9101.1     | 0.39    | 61.60         |
| [fastify-graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit.js)                           | 8374.7     | 0.44    | 57.01         |
| [benzene-http](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-http.js)                                         | 5599.7     | 1.33    | 38.17         |
| [fastify-graphql-jit-threads-pool](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit-threads-pool.js) | 4991.1     | 1.36    | 1.38          |
