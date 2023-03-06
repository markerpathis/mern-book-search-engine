const typeDefs = `#graphql
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]!
  }

  type Book {
  _id: id
  authors: String
  description: String
  bookId: String
  image: String
  link: String
  title: String
  }

`;

module.exports = typeDefs;
