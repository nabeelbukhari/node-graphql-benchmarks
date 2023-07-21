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
cd node-graphql-benchmarks
npm install
npm start
```

# Benchmarks
machine: Apple M1 with 16 GB RAM
duration: 15s
connections: 10
pipelining: 1

| Server                                                                                                                                            | Requests/s | Latency | Throughput/Mb | Memory Usage                | CPU Usage                       |
| :--                                                                                                                                               | --:        | :-:     | --:           | :--                         | :--                             |
| [go-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/go-graphql.js)                                             | 70856.7    | 0.01    | 117.70        | Startup: 38.70, Max: 39.36  | User: 5.26, System: 2.75        |
| [uWebSockets-graphql+jit-worker](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/uWebSockets-graphql+jit-worker.js)     | 23454.4    | 0.02    | 158.09        | Startup: 50.70, Max: 911.05 | User: 46970.86, System: 8960.71 |
| [core-graphql-jit-micro-worker](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-micro-worker.js)       | 23369.1    | 0.01    | 158.17        | Startup: 52.03, Max: 994.34 | User: 46771.62, System: 8391.56 |
| [fastify-graphql-jit-worker](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit-worker.js)             | 20288.5    | 0.04    | 138.11        | Startup: 61.13, Max: 925.95 | User: 43874.15, System: 8092.39 |
| [fastify-graphql-jit-threads](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit-threads.js)           | 18377.1    | 0.06    | 125.10        | Startup: 61.98, Max: 937.84 | User: 42952.13, System: 7953.93 |
| [uWebSockets-graphql+jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/uWebSockets-graphql+jit.js)                   | 10525.1    | 0.21    | 70.94         | Startup: 53.20, Max: 185.02 | User: 14890.97, System: 1816.20 |
| [core-graphql-jit-buf](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-buf.js)                         | 10289.3    | 0.20    | 69.64         | Startup: 52.34, Max: 173.89 | User: 13671.29, System: 1034.00 |
| [core-graphql-jit-str](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-str.js)                         | 10162.9    | 0.21    | 68.78         | Startup: 52.80, Max: 219.83 | User: 13713.42, System: 1078.50 |
| [fastify-graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit.js)                           | 10014.7    | 0.22    | 68.17         | Startup: 64.73, Max: 161.19 | User: 13504.67, System: 982.71  |
| [core-graphql-jit-micro](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-micro.js)                     | 9996.0     | 0.22    | 67.65         | Startup: 58.56, Max: 155.80 | User: 13822.18, System: 979.63  |
| [core-graphql-jit-buf-fjs](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-buf-fjs.js)                 | 9459.5     | 0.28    | 64.02         | Startup: 57.53, Max: 176.45 | User: 13630.69, System: 1024.04 |
| [benzene-http](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-http.js)                                         | 6083.3     | 1.21    | 41.47         | Startup: 51.59, Max: 207.20 | User: 15014.82, System: 1459.69 |
| [fastify-graphql-jit-threads-pool](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-graphql-jit-threads-pool.js) | 5486.8     | 1.37    | 1.51          | Startup: 61.23, Max: 684.52 | User: 19880.21, System: 4186.40 |
