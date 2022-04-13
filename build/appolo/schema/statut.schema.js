"use strict";

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    type Statut {\n        id:ID!\n        name: String\n        description: String\n\t\tcolor: String\n    }\n\n    input Statutinput {\n        name: String\n        description: String\n\t\tcolor: String\n    }\n\n    extend type Query {\n        statuts: [Statut]\n        statut(id: ID!): Statut\n\t\tcolor: String\n     }\n\n    extend type Mutation{\n        createStatut(name: String!, description: String!, color:String):Statut\n        updateStatut(id:ID!, Statutinput: Statutinput):Statut\n        deleteStatut(id:ID!):Int\n    }\n"])));