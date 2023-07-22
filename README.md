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
| [uWebSockets-graphql+jit-worker](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/uWebSockets-graphql+jit-worker.js)     | 23454.4    | 0.02    | 158.09        | Startup: 50.70MB, Max: 911.05MB | User: 46970.86 sec(s), System: 8960.71 sec(s) |
| [core-graphql-jit-micro-worker](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-micro-worker.js)       | 23369.1    | 0.01    | 158.17        | Startup: 52.03MB, Max: 994.34MB | User: 46771.62 sec(s), System: 8391.56 sec(s) |
| [fastify-graphql-jit-worker](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit-worker.js)             | 20288.5    | 0.04    | 138.11        | Startup: 61.13MB, Max: 925.95MB | User: 43874.15 sec(s), System: 8092.39 sec(s) |
| [fastify-graphql-jit-threads](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit-threads.js)           | 18377.1    | 0.06    | 125.10        | Startup: 61.98MB, Max: 937.84MB | User: 42952.13 sec(s), System: 7953.93 sec(s) |
| [uWebSockets-graphql+jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/uWebSockets-graphql+jit.js)                   | 10525.1    | 0.21    | 70.94         | Startup: 53.20MB, Max: 185.02MB | User: 14890.97 sec(s), System: 1816.20 sec(s) |
| [benzene-jit-http](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-jit-http.js)                                 | 10343.2    | 0.20    | 70.49         | Startup: 52.06MB, Max: 130.95MB | User: 13597.48 sec(s), System: 1000.61 sec(s) |
| [core-graphql-jit-buf](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-buf.js)                         | 10289.3    | 0.20    | 69.64         | Startup: 52.34MB, Max: 173.89MB | User: 13671.29 sec(s), System: 1034.00 sec(s) |
| [core-graphql-jit-str](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-str.js)                         | 10162.9    | 0.21    | 68.78         | Startup: 52.80MB, Max: 219.83MB | User: 13713.42 sec(s), System: 1078.50 sec(s) |
| [fastify-graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit.js)                           | 10014.7    | 0.22    | 68.17         | Startup: 64.73MB, Max: 161.19MB | User: 13504.67 sec(s), System: 982.71 sec(s)  |
| [core-graphql-jit-micro](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-micro.js)                     | 9996.0     | 0.22    | 67.65         | Startup: 58.56MB, Max: 155.80MB | User: 13822.18 sec(s), System: 979.63 sec(s)  |
| [core-graphql-jit-buf-fjs](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-buf-fjs.js)                 | 9459.5     | 0.28    | 64.02         | Startup: 57.53MB, Max: 176.45MB | User: 13630.69 sec(s), System: 1024.04 sec(s) |
| [benzene-http](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-http.js)                                         | 6592.1     | 1.15    | 44.93         | Startup: 51.02MB, Max: 149.50MB | User: 13873.43 sec(s), System: 917.35 sec(s)  |
| [fastify-graphql-jit-threads-pool](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit-threads-pool.js) | 5486.8     | 1.37    | 1.51          | Startup: 61.23MB, Max: 684.52MB | User: 19880.21 sec(s), System: 4186.40 sec(s) |
| [go-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/go-graphql.js)                                             | 2918.6     | 0.50    | 16.28         | Startup: 38.14MB, Max: 39.31MB  | User: 5.79 sec(s), System: 5.78 sec(s)        |
