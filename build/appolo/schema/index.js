"use strict";

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var _require = require('apollo-server-express'),
    gql = _require.gql;

var userSchema = require("./user.schema");

var statutSchema = require("./statut.schema");

var taskSchema = require("./task.schema");

var projectSchema = require("./projects.schema");

var userrolesSchema = require("./userroles.schema");

var linkSchema = gql(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    type Query {\n        _:Boolean\n    }\n    type Mutation {\n        _: Boolean\n    }\n"])));
module.exports = [linkSchema, statutSchema, userSchema, userrolesSchema, projectSchema, taskSchema];