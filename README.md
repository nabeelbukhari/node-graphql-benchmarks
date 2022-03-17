# TL;DR

- graphql-jit helps
- apollo-server adds overhead
- tracing resolvers kills performance
- type-graphql adds overhead
- For metrics (cold-start) see [METRICS.md](metrics.md)

# Explanation

For further details, please check out [this video](https://www.youtube.com/watch?v=JbV7MCeEPb8).

# Usage

```
git clone https://github.com/benawad/benchmarks
cd benchmarks
npm install
npm start
```

# Benchmarks
duration: 5.01s
connections: 5
pipelining: 1

| Server                                                                                                                                                                  | Requests/s | Latency | Throughput/Mb |
| :--                                                                                                                                                                     | --:        | :-:     | --:           |
| [go-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/go-graphql.js)                                                                   | 23892.8    | 0.01    | 39.78         |
| [rust-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/rust-graphql.js)                                                               | 9754.4     | 0.01    | 57.15         |
| [uWebSockets-graphql+jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/uWebSockets-graphql+jit.js)                                         | 6838.8     | 0.27    | 42.07         |
| [core-graphql-jit-buf](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-buf.js)                                               | 5563.6     | 0.28    | 34.58         |
| [core-graphql-jit-buf-fjs](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-buf-fjs.js)                                       | 5531.6     | 0.29    | 34.38         |
| [benzene-jit-http](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-jit-http.js)                                                       | 5432.4     | 0.29    | 34.02         |
| [core-graphql-jit-str](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/core-graphql-jit-str.js)                                               | 5414.0     | 0.30    | 33.65         |
| [mercurius+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius+graphql-jit.js)                                             | 5012.4     | 0.31    | 31.38         |
| [fastify-REST](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-REST.js)                                                               | 4633.2     | 0.35    | 37.14         |
| [express-REST](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-REST.js)                                                               | 3239.0     | 1.11    | 26.18         |
| [graphql-api-koa+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-api-koa+graphql-jit.js)                                 | 3163.4     | 1.26    | 19.78         |
| [fastify-express-graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-express-graphql-jit.js)                                 | 3025.8     | 1.26    | 0.83          |
| [express-gql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-gql.js)                                                                 | 2979.0     | 1.33    | 18.84         |
| [fastify-express-graphql-typed-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-express-graphql-typed-jit.js)                     | 2812.6     | 1.28    | 0.77          |
| [mercurius+graphql-compose](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius+graphql-compose.js)                                     | 2789.0     | 1.32    | 17.46         |
| [benzene-http](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/benzene-http.js)                                                               | 2735.4     | 1.32    | 17.13         |
| [mercurius](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius.js)                                                                     | 2695.4     | 1.34    | 16.87         |
| [mercurius+graphql-jit+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/mercurius+graphql-jit+type-graphql.js)                   | 2642.2     | 1.36    | 16.54         |
| [express-graphql+graphql-jit+graphql-compose](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+graphql-jit+graphql-compose.js) | 2499.0     | 1.48    | 15.80         |
| [express-graphql+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+graphql-jit.js)                                 | 2462.6     | 1.52    | 15.57         |
| [express-graphql+graphql-jit+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+graphql-jit+type-graphql.js)       | 2248.2     | 1.68    | 14.21         |
| [yoga-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/yoga-graphql.js)                                                               | 2220.8     | 1.71    | 0.98          |
| [graphql-api-koa](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-api-koa.js)                                                         | 2035.6     | 1.77    | 12.73         |
| [yoga-graphql-trace](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/yoga-graphql-trace.js)                                                   | 2016.6     | 1.95    | 0.89          |
| [apollo-server-fastify+graphql-jit](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-fastify+graphql-jit.js)                     | 1968.0     | 1.90    | 12.38         |
| [apollo-server-koa+graphql-jit+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-koa+graphql-jit+type-graphql.js)   | 1886.0     | 2.28    | 11.81         |
| [fastify-express-grapql-typed](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/fastify-express-grapql-typed.js)                               | 1837.2     | 2.36    | 0.50          |
| [express-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql.js)                                                         | 1756.2     | 2.55    | 11.11         |
| [express-graphql+graphql-compose](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+graphql-compose.js)                         | 1736.8     | 2.57    | 10.99         |
| [graphql-compose+async](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/graphql-compose+async.js)                                             | 1696.4     | 2.60    | 10.73         |
| [apollo-schema+async](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-schema+async.js)                                                 | 1678.8     | 2.60    | 10.62         |
| [type-graphql+async](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/type-graphql+async.js)                                                   | 1663.0     | 2.60    | 10.52         |
| [express-graphql-dd-trace-no-plugin](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql-dd-trace-no-plugin.js)                   | 1662.4     | 2.61    | 10.51         |
| [express-graphql+type-graphql](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql+type-graphql.js)                               | 1648.2     | 2.62    | 10.43         |
| [type-graphql+middleware](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/type-graphql+middleware.js)                                         | 1639.8     | 2.62    | 10.37         |
| [type-graphql+async-middleware](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/type-graphql+async-middleware.js)                             | 1628.0     | 2.66    | 10.30         |
| [apollo-server-fastify](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-fastify.js)                                             | 1502.6     | 2.87    | 9.45          |
| [apollo-server-express-tracing](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express-tracing.js)                             | 1261.6     | 3.38    | 8.02          |
| [apollo-server-express](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-server-express.js)                                             | 1254.4     | 3.44    | 7.97          |
| [apollo-opentracing](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/apollo-opentracing.js)                                                   | 1032.0     | 4.30    | 6.56          |
| [express-graphql-dd-trace-less](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql-dd-trace-less.js)                             | 893.4      | 5.22    | 5.65          |
| [express-graphql-dd-trace](https://github.com/benawad/node-graphql-benchmarks/tree/master/benchmarks/express-graphql-dd-trace.js)                                       | 873.0      | 5.35    | 5.52          |
