"use strict";

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    type Userrole {\n        id: ID!\n        name: String!\n    }\n\n    input Userroleinput {\n        name: String\n    }\n\n    extend type Query {\n        userroles: [Userrole]\n        userrole(id: ID!): Userrole\n    }\n    \n    extend type Mutation{\n        createUserrole(name: String!):Userrole\n        updateUserrole(id:ID!, input: Userroleinput):Userrole\n        deleteUserrole(id:ID!):Int\n    }\n    \n\n\n"])));