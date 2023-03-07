const typeDefs = `#graphql
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Book {
  _id: ID
  authors: String
  description: String
  bookId: String
  image: String
  link: String
  title: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    books: [Book]
  }

  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
