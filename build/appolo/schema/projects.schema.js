"use strict";

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    type Project {\n        id: ID!\n        title : String!\n        description : String!\n        start_date : String!\n        end_date : String!\n        statutId: Int\n        userId : Int\n        statut: Statut\n        user: User\n    }\n\n    input projectdataInput {\n\n        title : String!\n        description : String!\n        start_date : String!\n        end_date : String!\n        statutId: Int!\n        userId : Int!\n    }\n\n    input projectInputUpdate {\n        title : String\n        description : String\n        start_date : String\n        end_date : String\n        statutId: Int\n        userId: Int\n    }\n\n    extend type Query {\n        projects: [Project]\n        project(id: ID!): Project\n    }\n\n    extend type Mutation{\n        createproject(input: projectdataInput):Project\n        updateproject(id:ID!, input:projectInputUpdate):Project\n        deleteproject(id:ID!):Int\n    }\n\n"])));