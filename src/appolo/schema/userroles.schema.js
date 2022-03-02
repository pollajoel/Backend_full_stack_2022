import {gql} from "apollo-server-express"
module.exports = gql`

    type Userrole {
        id: ID!
        name: String!
        description: String!
    }

    extend type Query {
        userroles: [Userrole]
        userrole(id: ID!): Userrole
    }


`