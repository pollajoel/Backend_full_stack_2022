const express = require("express");
const router = express.Router();
const roles  = require("../controllers/userroles.controller");


router.get("/userRoles",roles.findAll);
module.exports = router;
