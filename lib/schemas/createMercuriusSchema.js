const md5 = require("md5");
const { data } = require("../data");

const schema = `
  type Author {
    id: ID!
    name: String!
    md5: String!
    company: String!
    books: [Book!]!
  }

  type Book {
    id: ID!
    name: String!
    numPages: Int!
  }

  type Query {
    authors: [Author!]!
  }
`;

const resolvers = {
  Author: {
    md5: (parent) => md5(parent.name),
  },
  Query: {
    authors: () => data,
  },
};

const asyncResolvers = {
  Author: {
    md5: (parent) => md5(parent.name),
  },
  Query: {
    authors: async () => data,
  },
};

module.exports.createMercuriusSchema = () => {
  return {
    schema,
    resolvers,
  }
};


module.exports.createAsyncMercuriusSchema = () => {
  return {
    schema,
    resolvers: asyncResolvers,
  };
}
