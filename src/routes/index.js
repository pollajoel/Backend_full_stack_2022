const express = require('express');
const router = express.Router();
const users = require("./users.routes");
//const rise = require("./rise.routes");

router.use( users );
//router.use( rise );
module.exports = router