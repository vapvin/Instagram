import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
 
const typeDefs = gql`
  type Query {
    hyemin: String
  }
`;
 
const resolvers = {
  Query: {
    hyemin: () => '혜민님 똑똑해!',
  },
};
 
const server = new ApolloServer({ typeDefs, resolvers });
 
const app = express();
server.applyMiddleware({ app });
 
app.listen({ port: 4000 }, () => console.log(`🚀 Server ready at http://localhost:4000/graphql <= this link `))