import {gql} from "apollo-server-express"
module.exports = gql`

    type Task {
        id: ID!
        name: String!
        description: String!
        start_date : String!
        end_date : String!
    }

    extend type Query {
        tasks: [Task]
        task(id: ID!): Task
    }


`