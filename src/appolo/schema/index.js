const { gql } = require('apollo-server-express');
const userSchema = require("./user.schema");
const statutSchema = require("./statut.schema");
const taskSchema = require("./task.schema");
const projectSchema = require("./projects.schema");
const userrolesSchema = require("./userroles.schema");

const linkSchema = gql`
    type Query {
        _:Boolean
    }
    type Mutation {
        _: Boolean
    }
`;
module.exports = [
    linkSchema, 
    statutSchema, 
    userSchema,
    userrolesSchema,
    projectSchema,
    taskSchema
]