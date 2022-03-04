const statut = require("./statut.resolver");
const userrole = require("./userroles.resolver");
const user = require("./user.resolver");
const task = require("./task.resolver");
const project = require( "./projects.resolver");
module.exports = [
    statut,
    userrole,
    user,
    task,
    project
];