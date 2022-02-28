const { gql } = require('apollo-server-express');
const statutSchema = require("./statut.schema");
const userSchema = require("./user.schema");

const linkSchema = gql`
    type Query {
        _:Boolean
    }
    type Mutation {
        _: Boolean
    }
`;
module.exports = [linkSchema, statutSchema, userSchema]