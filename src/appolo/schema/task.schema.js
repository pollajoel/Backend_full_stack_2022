import {gql} from "apollo-server-express"
module.exports = gql`



    type Task {
        id: ID!
        name: String!
        description: String!
        start_date : String!
        end_date : String!
        statutId: Int!
	    user: User
        statut: Statut
        projects: Project
		projectId: Int
        
    }

    input taskInput {
        name: String!
        description: String!
        start_date : String!
        end_date : String!
        statutId: Int!
	    userId : Int!
		projectId: Int
        
    } 

    input updatetaskInput {
        name: String
        description: String
        statutId: Int
		start_date : String
		end_date : String
	    userId : Int
		projectId: Int
    } 

    extend type Query {
        tasks: [Task]
        task(id: ID!): Task
        projectsTaks(projectId:ID!): [Task]
    }

    extend type Mutation{
        createtask(taskInput: taskInput):Task
        updatetask(id:ID!, updatetaskInput:updatetaskInput):Task
        deletetask(id:ID!):Int
    }





`