const express = require('express');
const router = express.Router();
const users = require("./users.routes");
const projects = require("./projects.routes");
const picture =  require("./picture.routes");
const roles = require("./userrole.routes");
const statut = require("./statuts.routes");
const task = require("./task.routes");

router.use( users );
router.use( statut );
router.use( projects );
router.use( picture );
router.use( roles );
router.use( task );
module.exports = router