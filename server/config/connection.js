import { ApolloClient } from '@ApolloClient';
require('dotenv').config();

const InMemoryCache = require('apollo-boost').InMemoryCache;
const ApolloClient = require('apollo-boost').ApolloClient;

const HttpLink = require('apollo-boost').HttpLink;
const appList = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: gqluri,
        fetch: fetch
    }),
});


module.exports(appList);