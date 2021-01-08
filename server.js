const path = require('path');
const express = require('express');
const db = require('./server/config/connection');

const { ApolloServer } = require('apollo-server-express');
const { authMiddleware } = require('./server/utils/auth');

const { typeDefs } = require('./server/schema');

const app = express();

const server = new ApolloServer({
    typeDefs,
    context: authMiddleware
  });

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const PORT = process.env.PORT || 3001;

db.once('open', () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      // log where we can go to test our GQL API
      console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
  });