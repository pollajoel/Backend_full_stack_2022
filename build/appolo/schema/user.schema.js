"use strict";

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n    type AuthPayload {\n        token: String\n        user: User\n    }\n    \n    type User {\n        id: ID!\n        name: String!\n        email: String!\n        firstname: String\n        password: String\n        is_admin: String\n        phone: String\n        postal_code: String\n        city: String\n        country: String\n        profil_image: String\n    }\n\n    extend type Query {\n        users: [Statut]\n        user(id: ID!): User\n     }\n"])));