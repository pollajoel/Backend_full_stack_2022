import {gql} from "apollo-server-express"
module.exports = gql`

    type Task {
        id: ID!
        name: String!
        description: String!
        start_date : String!
        end_date : String!
        statutId: Int!
	    userId : Int!
    }

    input taskInput {
        name: String!
        description: String!
        start_date : String!
        end_date : String!
        statutId: Int!
	    userId : Int!
    } 

    input updatetaskInput {
        name: String
        description: String
        start_date : String
        end_date : String
        statutId: Int
	    userId : Int
    } 

    extend type Query {
        tasks: [Task]
        task(id: ID!): Task
    }

    extend type Mutation{
        createtask(input: taskInput):Task
        updatetask(id:ID!, input:updatetaskInput):Task
        deletetask(id:ID!):Int
    }





`