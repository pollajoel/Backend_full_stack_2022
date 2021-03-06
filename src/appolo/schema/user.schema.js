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
        is_admin: Boolean
        phone: String
        postal_code: String
        city: String
        profil_image: String
        userrole:Userrole
    }


    input userInput {
        name: String!
        email: String!
        firstname: String!
        password: String!
        is_admin: Boolean!
        phone: String
        postal_code: String
        city: String
        profil_image: String
       
    }


    input updateuserInput{
        name: String
        email: String
        firstname: String
        password: String
        is_admin: Boolean
        phone: String
        postal_code: String
        city: String
        profil_image: String
    }

    type userTokenInput {
        token: String!
        user : User!
    }

   

    extend type Query {
        users: [User]
        user(id: ID!): User
		getMe: User
     }

    extend type Mutation{
        createUser(registuser:userInput!):User
        updateUser(id:ID!, updtateUserinput: updateuserInput!):User
        deleteUser(id:ID!):Int
        authentification(email:String!, password:String!):userTokenInput
    }




`