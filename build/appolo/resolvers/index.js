"use strict";

var statut = require("./statut.resolver");

var userrole = require("./userroles.resolver");

var user = require("./user.resolver");

var task = require("./task.resolver");

var project = require("./projects.resolver");

module.exports = [statut, userrole, user, task, project];