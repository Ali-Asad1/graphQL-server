import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema/schema.js";
import db from "../database/_db.js";

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      posts() {
        return db.posts;
      },
      authors() {
        return db.authors;
      },
      post(_, args) {
        return db.posts.find((post) => post.id === args.id);
      },
      author(_, args) {
        return db.authors.find((author) => author.id === args.id);
      },
    },
  },
});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 3002,
  },
});

console.log("server run on port 3002");
