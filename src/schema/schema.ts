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
    post(id:ID!): Post
    authors: [Author]
    author(id:ID!):Author
  }

  type Mutation {
    addPost(post: AddPostInput!): Post
    deletePost(id: ID!): [Post]
  }
  input AddPostInput {
    title: String!
    body: String!
  }
`;
