export const typeDefs = `#graphql
  type Post {
    id: ID!
    title:  String!
    body: String!
    author: Author!
  }

  type Author {
    id: ID!
    username: String!
    posts:[Post!]!
  }

  type Query {
    posts: [Post],
    authors: [Author]
    post(id:ID!): Post
    author(id:ID!):Author
  }
`;
