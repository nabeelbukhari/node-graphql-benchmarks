
# Metrics
* __Machine:__ darwin x64 | 16 vCPUs | 16.0GB Mem
* __Node:__ `v18.7.0`
* __Run:__ Sat Aug 06 2022 20:37:54 GMT+0800 (Philippine Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

|                                                | startup(ms) | listen(ms) |
| -                                              | -           | -          |
| fastify-REST.js                                | 177.57      | 190.16     |
| graphql-compose+async.js                       | 277.55      | 281.07     |
| express-graphql+graphql-compose.js             | 280.44      | 283.95     |
| express-graphql+graphql-jit+graphql-compose.js | 328.34      | 332.10     |
| type-graphql+async.js                          | 343.18      | 346.93     |
| type-graphql+middleware.js                     | 345.45      | 348.97     |
| type-graphql+async-middleware.js               | 346.02      | 349.59     |
| express-graphql+type-graphql.js                | 357.74      | 361.34     |
| fastify-express-grapql-typed.js                | 376.53      | 390.66     |
| express-graphql.js                             | 387.81      | 391.23     |
| benzene-http.js                                | 394.15      | 397.51     |
| apollo-schema+async.js                         | 394.84      | 398.42     |
| express-graphql+graphql-jit+type-graphql.js    | 402.91      | 406.41     |
| fastify-express-graphql-typed-jit.js           | 397.77      | 409.92     |
| graphql-api-koa.js                             | 409.98      | 413.65     |
| apollo-server-express-tracing.js               | 417.12      | 420.73     |
| apollo-server-express.js                       | 419.52      | 422.93     |
| apollo-opentracing.js                          | 425.06      | 428.46     |
| core-graphql-jit-str.js                        | 425.55      | 428.75     |
| core-graphql-jit-buf.js                        | 428.11      | 431.30     |
| express-gql.js                                 | 432.76      | 436.53     |
| express-graphql+graphql-jit.js                 | 446.58      | 450.17     |
| graphql-api-koa+graphql-jit.js                 | 457.77      | 461.41     |
| core-graphql-jit-buf-fjs.js                    | 471.48      | 475.16     |
| mercurius+graphql-compose.js                   | 456.48      | 501.84     |
| apollo-server-koa+graphql-jit+type-graphql.js  | 509.10      | 512.89     |
| mercurius+graphql-jit+type-graphql.js          | 484.34      | 529.95     |
| fastify-express-graphql-jit.js                 | 546.14      | 558.77     |
| yoga-graphql.js                                | 552.54      | 559.34     |
| yoga-graphql-trace.js                          | 555.34      | 562.19     |
| express-graphql-dd-trace-no-plugin.js          | 647.81      | 649.77     |
| mercurius.js                                   | 645.89      | 692.55     |
| mercurius+graphql-jit.js                       | 657.36      | 705.93     |
| express-graphql-dd-trace.js                    | 800.68      | 802.61     |
| express-graphql-dd-trace-less.js               | 829.94      | 831.99     |
