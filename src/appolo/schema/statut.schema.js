import {gql} from "apollo-server-express"
module.exports = gql`
    type Statut {
        id:ID!
        name: String
        description: String
		color: String
    }

    input Statutinput {
        name: String
        description: String
		color: String
    }

    extend type Query {
        statuts: [Statut]
        statut(id: ID!): Statut
		color: String
     }

    extend type Mutation{
        createStatut(name: String!, description: String!, color:String):Statut
        updateStatut(id:ID!, Statutinput: Statutinput):Statut
        deleteStatut(id:ID!):Int
    }
`