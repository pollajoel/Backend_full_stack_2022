import {gql} from "apollo-server-express"
module.exports = gql`

    type Projects {
        id: ID!
        title : String!
        description : String!
        start_date : String!
        end_date : String!
    }

    extend type Query {
        projects: [Projects]
        project(id: ID!): Projects
    }


`