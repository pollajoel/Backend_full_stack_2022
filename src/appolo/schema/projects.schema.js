import {gql} from "apollo-server-express"
module.exports = gql`

    type Project {
        id: ID!
        title : String!
        description : String!
        start_date : String!
        end_date : String!
        statutId: Int
        userId : Int
        statut: Statut
        user: User
    }

    input projectdataInput {

        title : String!
        description : String!
        start_date : String!
        end_date : String!
        statutId: Int!
        userId : Int!
    }

    input projectInputUpdate {
        title : String
        description : String
        start_date : String
        end_date : String
        statutId: Int
        userId: Int
    }

    extend type Query {
        projects: [Project]
        project(id: ID!): Project
    }

    extend type Mutation{
        createproject( projectdataInput: projectdataInput):Project
        updateproject(id:ID!, projectInputUpdate:projectInputUpdate):Project
        deleteproject(id:ID!):Int
    }

`