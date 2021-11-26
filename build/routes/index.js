const express = require('express');
const router = express.Router();
const users = require("./users.routes");
const rise = require("./rise.routes");
const picture =  require("./picture.routes");

router.use( users );
router.use( rise );
router.use(picture);
module.exports = router