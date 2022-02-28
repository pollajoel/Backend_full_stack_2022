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

    extend type Query {
        users: [Statut]
        user(id: ID!): User
     }
`