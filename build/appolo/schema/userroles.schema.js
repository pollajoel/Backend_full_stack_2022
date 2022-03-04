import {gql} from "apollo-server-express"
module.exports = gql`

    type Userrole {
        id: ID!
        name: String!
    }

    input Userroleinput {
        name: String
    }

    extend type Query {
        userroles: [Userrole]
        userrole(id: ID!): Userrole
    }
    
    extend type Mutation{
        createUserrole(name: String!):Userrole
        updateUserrole(id:ID!, input: Userroleinput):Userrole
        deleteUserrole(id:ID!):Int
    }
    


`
