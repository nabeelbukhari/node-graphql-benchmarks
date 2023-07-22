# TL;DR

- graphql-jit helps
- apollo-server adds overhead
- tracing resolvers kills performance
- type-graphql adds overhead

# Introduction

This is a fork of [node-graphql-benchmark](https://github.com/benawad/node-graphql-benchmarks) repo and has following changes:

- Changed default setting for benchmark as this repo contains worker-thread examples so it takes more time to start.
- All benchmarks that perform slower than http server are moved to others folder subfolder of benchmark folder.
- Fixed [bug](https://github.com/nabeelbukhari/node-graphql-benchmarks/blob/127b19c31d8eeba25a66889f58d3518bf082b556/other-benchmarks/go-gql/server.go#L25) in go-graphql benchmark and it turns out to be very slow.
- Dependencies updates
- For metrics (cold-start) see [metrics.md](METRICS.md)

# Explanation

For further details, please check out [this video](https://www.youtube.com/watch?v=JbV7MCeEPb8).

# Usage

```
git clone https://github.com/nabeelbukhari/node-graphql-benchmarks
cd node-graphql-benchmarks
npm install
npm start
```

# Benchmarks
machine: Apple M1 with 16 GB RAM
duration: 15s
connections: 10
pipelining: 1

| Server                                                                                                                                            | Requests/s | Latency | Throughput/Mb | Memory Usage                    | CPU Usage                                        |
| :--                                                                                                                                               | --:        | :-:     | --:           | :--                             | :--                                              |
| [uWebSockets-graphql+jit-worker](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/uWebSockets-graphql+jit-worker.js)     | 25778.7    | 0.01    | 159.50        | Startup: 50.92MB, Max: 607.52MB | User: 42478.74 sec(s), System: 5981.34 sec(s)    |
| [core-graphql-jit-micro-worker](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-micro-worker.js)       | 24418.7    | 0.01    | 151.80        | Startup: 51.86MB, Max: 601.63MB | User: 43302.26 sec(s), System: 5885.66 sec(s)    |
| [fastify-graphql-jit-worker](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit-worker.js)             | 22524.3    | 0.03    | 140.92        | Startup: 60.91MB, Max: 656.77MB | User: 41470.41 sec(s), System: 5872.09 sec(s)    |
| [rust-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/rust-graphql.js)                                         | 22171.2    | 0.05    | 130.25        | Startup: 38.66MB, Max: 39.06MB  | User: 2.90 sec(s), System: 0.50 sec(s)           |
| [fastify-graphql-jit-threads](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit-threads.js)           | 20465.6    | 0.03    | 128.03        | Startup: 62.20MB, Max: 406.61MB | User: 40679.48 sec(s), System: 6427.14 sec(s)    |
| [uWebSockets-graphql+jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/uWebSockets-graphql+jit.js)                   | 11678.7    | 0.14    | 72.26         | Startup: 53.59MB, Max: 647.92MB | User: -67694.40 sec(s), System: -11310.66 sec(s) |
| [core-graphql-jit-buf-fjs](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-buf-fjs.js)                 | 11291.5    | 0.13    | 70.18         | Startup: 57.66MB, Max: 102.63MB | User: -14039.47 sec(s), System: -592.03 sec(s)   |
| [core-graphql-jit-str](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-str.js)                         | 10590.7    | 0.16    | 65.83         | Startup: 54.19MB, Max: 103.23MB | User: -13974.52 sec(s), System: -668.91 sec(s)   |
| [core-graphql-jit-buf](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-buf.js)                         | 10565.1    | 0.15    | 65.68         | Startup: 51.80MB, Max: 103.50MB | User: -13879.66 sec(s), System: -710.01 sec(s)   |
| [benzene-jit-http](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-jit-http.js)                                 | 10486.1    | 0.16    | 65.69         | Startup: 52.31MB, Max: 105.23MB | User: -14852.53 sec(s), System: -481.77 sec(s)   |
| [fastify-graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit.js)                           | 10351.7    | 0.19    | 64.76         | Startup: 65.20MB, Max: 354.75MB | User: -69259.84 sec(s), System: -11198.54 sec(s) |
| [core-graphql-jit-micro](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-micro.js)                     | 10321.9    | 0.20    | 64.15         | Startup: 57.95MB, Max: 99.45MB  | User: 13855.47 sec(s), System: 722.20 sec(s)     |
| [go-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/go-graphql.js)                                             | 8804.0     | 0.69    | 54.76         | Startup: 36.64MB, Max: 37.61MB  | User: 4.16 sec(s), System: 2.34 sec(s)           |
| [benzene-http](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-http.js)                                         | 6829.7     | 1.12    | 42.78         | Startup: 51.52MB, Max: 105.30MB | User: 14238.24 sec(s), System: 638.59 sec(s)     |
| [fastify-graphql-jit-threads-pool](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit-threads-pool.js) | 5486.8     | 1.34    | 1.51          | Startup: 63.02MB, Max: 332.86MB | User: -13363.58 sec(s), System: 1526.13 sec(s)   |
