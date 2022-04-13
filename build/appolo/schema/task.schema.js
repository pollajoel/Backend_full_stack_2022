"use strict";

var _apolloServerExpress = require("apollo-server-express");

var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

module.exports = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\n\n\n    type Task {\n        id: ID!\n        name: String!\n        description: String!\n        start_date : String!\n        end_date : String!\n        statutId: Int!\n\t    user: User\n        statut: Statut\n        projects: Project\n\t\tprojectId: Int\n        \n    }\n\n    input taskInput {\n        name: String!\n        description: String!\n        start_date : String!\n        end_date : String!\n        statutId: Int!\n\t    userId : Int!\n\t\tprojectId: Int\n        \n    } \n\n    input updatetaskInput {\n        name: String\n        description: String\n        statutId: Int\n\t\tstart_date : String\n\t\tend_date : String\n\t    userId : Int\n\t\tprojectId: Int\n    } \n\n    extend type Query {\n        tasks: [Task]\n        task(id: ID!): Task\n        projectsTaks(projectId:ID!): [Task]\n    }\n\n    extend type Mutation{\n        createtask(taskInput: taskInput):Task\n        updatetask(id:ID!, updatetaskInput:updatetaskInput):Task\n        deletetask(id:ID!):Int\n    }\n\n\n\n\n\n"])));