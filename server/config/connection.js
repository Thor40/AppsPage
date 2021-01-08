import { gql, useQuery } from '@apollo/client';
import { ApolloClient } from '@ApolloClient';
require('dotenv').config();

const ApolloClient = require('apollo-boost').ApolloClient;

const HttpLink = require('apollo-boost').HttpLink;
const appList = new ApolloClient({
    link: new HttpLink({
        uri: gqluri,
        fetch: fetch
    }),
});


module.exports(appList);