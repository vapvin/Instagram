import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import logger from 'morgan';
import helmet from 'helmet';
import schema from './schema';
import { sequelize } from '../database/models';
import contextMiddleware from './utils/contextMiddleware';
 
const PORT = process.env.PORT || 4000;

 
const server = new ApolloServer({ 
  schema,
  context: contextMiddleware,
 });

const app = express();
server.applyMiddleware({ app });
app.use('*', logger('dev'), helmet);
 
app.listen({ port: PORT }, () => {
  console.log(`🚀 Server ready at http://localhost:4000/graphql`);
  sequelize.authenticate()
    .then(() => console.log('Connected'))
    .catch(err => console.log(err));
});