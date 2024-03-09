export const typeDefs = `#graphql
  type Post {
    id: ID!
    title:  String!
    body: String!
  }

  type Author {
    id: ID!
    username: String!
  }

  type Query {
    posts: [Post],
    authors: [Author]
    post(id:ID!): Post
    author(id:ID!):Author
  }
`;
