import {gql} from "apollo-server-express"
module.exports = gql`

    type AuthPayload {
        token: String
        user: User
    }
    
    type User {
        id: ID!
        name: String!
        email: String!
        firstname: String
        password: String
        is_admin: String
        phone: String
        postal_code: String
        city: String
        country: String
        profil_image: String
    }


    input userInput {
        name: String!
        email: String!
        firstname: String!
        password: String!
        is_admin: String!
        phone: String
        postal_code: String
        city: String
        country: String
        profil_image: String
    }


    input updateuserInput{
        name: String
        email: String
        firstname: String
        password: String
        is_admin: String
        phone: String
        postal_code: String
        city: String
        country: String
        profil_image: String
    }

    type userTokenInput {
        token: String!
        user : User!
    }

   

    extend type Query {
        users: [User]
        user(id: ID!): User
     }

    extend type Mutation{
        createUser(input:userInput!):User
        updateUser(id:ID!, input: updateuserInput!):User
        deleteUser(id:ID!):Int
        authentification(email:String!, password:String!):userTokenInput
    }




`