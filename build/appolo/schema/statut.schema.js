import {gql} from "apollo-server-express"
module.exports = gql`
    type Statut {
        id:ID!
        name: String
        description: String
    }

    input Statutinput {
        name: String
        description: String
    }

    extend type Query {
        statuts: [Statut]
        statut(id: ID!): Statut
     }

    extend type Mutation{
        createStatut(name: String!, description: String!):Statut
        updateStatut(id:ID!, input: Statutinput):Statut
        deleteStatut(id:ID!):Int
    }
`