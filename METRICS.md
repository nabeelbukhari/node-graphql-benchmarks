
# Metrics
* __Machine:__ darwin x64 | 16 vCPUs | 16.0GB Mem
* __Node:__ `v18.7.0`
* __Run:__ Sat Aug 06 2022 20:40:42 GMT+0800 (Philippine Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

|                                                | startup(ms) | listen(ms) |
| -                                              | -           | -          |
| fastify-REST.js                                | 177.98      | 190.56     |
| graphql-compose+async.js                       | 277.69      | 281.22     |
| express-graphql+graphql-compose.js             | 278.04      | 281.54     |
| express-graphql+graphql-jit+graphql-compose.js | 326.61      | 330.82     |
| type-graphql+async.js                          | 343.35      | 347.15     |
| type-graphql+middleware.js                     | 345.45      | 349.01     |
| type-graphql+async-middleware.js               | 346.59      | 350.13     |
| express-graphql+type-graphql.js                | 352.75      | 356.24     |
| express-graphql.js                             | 387.67      | 391.12     |
| fastify-express-grapql-typed.js                | 377.15      | 391.17     |
| benzene-http.js                                | 391.38      | 394.66     |
| apollo-schema+async.js                         | 392.47      | 395.98     |
| express-graphql+graphql-jit+type-graphql.js    | 397.39      | 400.84     |
| fastify-express-graphql-typed-jit.js           | 398.94      | 411.06     |
| graphql-api-koa.js                             | 410.65      | 414.32     |
| apollo-server-express-tracing.js               | 412.23      | 415.73     |
| apollo-server-express.js                       | 413.64      | 417.04     |
| core-graphql-jit-str.js                        | 419.10      | 422.30     |
| core-graphql-jit-buf.js                        | 419.95      | 423.16     |
| apollo-opentracing.js                          | 420.35      | 423.78     |
| express-gql.js                                 | 428.06      | 431.72     |
| express-graphql+graphql-jit.js                 | 440.57      | 444.12     |
| graphql-api-koa+graphql-jit.js                 | 458.00      | 461.67     |
| core-graphql-jit-buf-fjs.js                    | 464.44      | 468.12     |
| mercurius+graphql-compose.js                   | 457.14      | 502.77     |
| apollo-server-koa+graphql-jit+type-graphql.js  | 502.76      | 506.43     |
| mercurius+graphql-jit+type-graphql.js          | 487.01      | 532.63     |
| yoga-graphql.js                                | 550.11      | 556.97     |
| yoga-graphql-trace.js                          | 550.72      | 557.56     |
| fastify-express-graphql-jit.js                 | 547.10      | 559.70     |
| express-graphql-dd-trace-no-plugin.js          | 649.30      | 651.26     |
| mercurius.js                                   | 647.97      | 695.01     |
| mercurius+graphql-jit.js                       | 656.22      | 704.80     |
| express-graphql-dd-trace.js                    | 801.28      | 803.21     |
| express-graphql-dd-trace-less.js               | 819.56      | 821.55     |
