import {gql} from "apollo-server-express"
module.exports = gql`
    type Statut {
        id:ID!
    }

    extend type Query {
        statuts: [Statut]
        statut(id: ID!): Statut
     }
`