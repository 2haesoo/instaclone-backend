import { ApolloServer, gql } from "apollo-server";
import { typeDefs, resolvers } from './schema';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server
  .listen()
  .then(() => console.log("Server is runnning on http://localhost:4000"));