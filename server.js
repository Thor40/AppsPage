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

app.get('/', function (req, res) {
    res.send('Hello World')
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
});