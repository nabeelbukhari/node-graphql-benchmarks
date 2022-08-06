
# Metrics
* __Machine:__ darwin x64 | 16 vCPUs | 16.0GB Mem
* __Node:__ `v14.16.1`
* __Run:__ Sun Mar 20 2022 10:20:46 GMT+0800 (Philippine Standard Time)
* __Method:__ `npm run metrics` (samples: 5)
* __startup:__ time elapsed to setup the application
* __listen:__ time elapsed until the http server is ready to accept requests (cold start)

|                                                | startup(ms) | listen(ms) |
|------------------------------------------------|-------------|------------|
| fastify-REST.js                                | 96.32       | 103.95     |
| express-graphql+graphql-compose.js             | 138.86      | 140.47     |
| graphql-compose+async.js                       | 139.82      | 141.4      |
| express-graphql+graphql-jit+graphql-compose.js | 162.22      | 164        |
| express-graphql+type-graphql.js                | 176.18      | 177.77     |
| type-graphql+middleware.js                     | 179.89      | 181.52     |
| type-graphql+async.js                          | 181.98      | 183.69     |
| type-graphql+async-middleware.js               | 183.17      | 184.79     |
| express-graphql.js                             | 193.86      | 195.58     |
| benzene-http.js                                | 194         | 195.79     |
| apollo-schema+async.js                         | 195.06      | 196.7      |
| express-graphql+graphql-jit+type-graphql.js    | 200.34      | 202.08     |
| graphql-api-koa.js                             | 205.06      | 206.79     |
| apollo-server-express.js                       | 204.18      | 207.37     |
| apollo-server-express-tracing.js               | 206.22      | 208.18     |
| core-graphql-jit-str.js                        | 208.99      | 210.74     |
| core-graphql-jit-buf.js                        | 209.68      | 211.46     |
| apollo-opentracing.js                          | 209.98      | 211.55     |
| fastify-express-grapql-typed.js                | 207.15      | 216.18     |
| express-gql.js                                 | 216.18      | 217.74     |
| express-graphql+graphql-jit.js                 | 218.77      | 220.41     |
| fastify-express-graphql-typed-jit.js           | 219.97      | 227.73     |
| graphql-api-koa+graphql-jit.js                 | 230.79      | 232.44     |
| core-graphql-jit-buf-fjs.js                    | 235.42      | 237.25     |
| yoga-graphql.js                                | 258.97      | 262.6      |
| yoga-graphql-trace.js                          | 259.09      | 262.9      |
| apollo-server-koa+graphql-jit+type-graphql.js  | 261.48      | 263.04     |
| mercurius+graphql-compose.js                   | 251.36      | 279.92     |
| fastify-express-graphql-jit.js                 | 280.96      | 288.72     |
| mercurius+graphql-jit+type-graphql.js          | 264.48      | 292.87     |
| express-graphql-dd-trace-no-plugin.js          | 337.3       | 338.56     |
| mercurius+graphql-jit.js                       | 331.51      | 360.85     |
| mercurius.js                                   | 348.4       | 377.85     |
| express-graphql-dd-trace.js                    | 429.24      | 430.27     |
| express-graphql-dd-trace-less.js               | 431.83      | 432.88     |
