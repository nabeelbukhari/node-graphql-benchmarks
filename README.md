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

| Server                                                                                                                                            | Requests/s | Latency | Throughput/Mb | Memory Usage                    | CPU Usage                                     |
| :--                                                                                                                                               | --:        | :-:     | --:           | :--                             | :--                                           |
| [uWebSockets-graphql+jit-worker](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/uWebSockets-graphql+jit-worker.js)     | 25778.7    | 0.01    | 159.50        | Startup: 50.92MB, Max: 607.52MB | User: 42478.74 sec(s), System: 5981.34 sec(s) |
| [core-graphql-jit-micro-worker](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-micro-worker.js)       | 24418.7    | 0.01    | 151.80        | Startup: 51.86MB, Max: 601.63MB | User: 43302.26 sec(s), System: 5885.66 sec(s) |
| [fastify-graphql-jit-worker](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit-worker.js)             | 22524.3    | 0.03    | 140.92        | Startup: 60.91MB, Max: 656.77MB | User: 41470.41 sec(s), System: 5872.09 sec(s) |
| [rust-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/rust-graphql.js)                                         | 22171.2    | 0.05    | 130.25        | Startup: 38.66MB, Max: 39.06MB  | User: 2.90 sec(s), System: 0.50 sec(s)        |
| [fastify-graphql-jit-threads](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit-threads.js)           | 20465.6    | 0.03    | 128.03        | Startup: 62.20MB, Max: 406.61MB | User: 40679.48 sec(s), System: 6427.14 sec(s) |
| [uWebSockets-graphql+jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/uWebSockets-graphql+jit.js)                   | 11717.1    | 0.13    | 72.50         | Startup: 52.34MB, Max: 345.77MB | User: 26744.50 sec(s), System: 4616.30 sec(s) |
| [mercurius+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius+graphql-jit.js)                       | 11328.3    | 0.15    | 70.92         | Startup: 75.42MB, Max: 82.33MB  | User: 13260.18 sec(s), System: 804.50 sec(s)  |
| [core-graphql-jit-buf-fjs](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-buf-fjs.js)                 | 10841.9    | 0.16    | 67.40         | Startup: 58.61MB, Max: 101.97MB | User: 27831.61 sec(s), System: 1322.16 sec(s) |
| [core-graphql-jit-buf](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-buf.js)                         | 10663.2    | 0.15    | 66.29         | Startup: 52.91MB, Max: 93.36MB  | User: 27372.09 sec(s), System: 1628.83 sec(s) |
| [core-graphql-jit-str](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-str.js)                         | 10602.4    | 0.15    | 65.90         | Startup: 53.52MB, Max: 100.36MB | User: 27487.35 sec(s), System: 1345.96 sec(s) |
| [benzene-jit-http](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-jit-http.js)                                 | 10397.6    | 0.18    | 65.14         | Startup: 53.16MB, Max: 97.80MB  | User: 28704.27 sec(s), System: 1201.85 sec(s) |
| [fastify-graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit.js)                           | 10287.7    | 0.20    | 64.36         | Startup: 65.14MB, Max: 107.42MB | User: 27691.47 sec(s), System: 1313.27 sec(s) |
| [core-graphql-jit-micro](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-micro.js)                     | 10046.7    | 0.22    | 62.44         | Startup: 69.53MB, Max: 91.95MB  | User: 13564.24 sec(s), System: 717.65 sec(s)  |
| [go-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/go-graphql.js)                                             | 8734.7     | 0.69    | 48.53         | Startup: 28.97MB, Max: 37.64MB  | User: 4.10 sec(s), System: 2.22 sec(s)        |
| [mercurius](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius.js)                                               | 7223.6     | 1.13    | 45.23         | Startup: 75.45MB, Max: 106.41MB | User: 13792.65 sec(s), System: 668.08 sec(s)  |
| [benzene-http](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-http.js)                                         | 6820.7     | 1.13    | 42.73         | Startup: 51.78MB, Max: 107.13MB | User: 14279.67 sec(s), System: 640.61 sec(s)  |
| [fastify-graphql-jit-threads-pool](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit-threads-pool.js) | 5515.9     | 1.34    | 1.52          | Startup: 61.95MB, Max: 322.86MB | User: 27729.25 sec(s), System: 1346.91 sec(s) |
