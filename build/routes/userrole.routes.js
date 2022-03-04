"use strict";

var express = require("express");

var router = express.Router();

var roles = require("../controllers/userroles.controller");

var Secure = require("../middleware/secureRoute.middleware");

router.get("/roles", Secure.authenticateJWT, roles.findAll);
router.post("/role", Secure.authenticateJWT, roles.create);
router.get("/role/:id", Secure.authenticateJWT, roles.findById);
router.put("/role/:id", Secure.authenticateJWT, roles.update);
router["delete"]("/role/:id", Secure.authenticateJWT, roles["delete"]);
module.exports = router;