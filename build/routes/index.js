"use strict";

var express = require('express');

var router = express.Router();

var users = require("./users.routes");

var projects = require("./projects.routes");

var picture = require("./picture.routes");

var roles = require("./userrole.routes");

var statut = require("./statuts.routes");

var task = require("./task.routes");

router.use(users);
router.use(statut);
router.use(projects);
router.use(picture);
router.use(roles);
router.use(task);
module.exports = router;