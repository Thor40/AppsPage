const { gql } = require('apollo-server-express');

const typeDefs = gql`

type Query {
        listApps {
            items {
                name
                img
            }
        }
    } 
`;

module.exports = typeDefs;