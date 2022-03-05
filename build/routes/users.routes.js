"use strict";

var express = require("express");

var router = express.Router();

var user = require("../controllers/user.controller");

var Secure = require("../middleware/secureRoute.middleware");

router.get("/users", Secure.authenticateJWT, user.findAll);
router.get("/user/:id", Secure.authenticateJWT, user.findById);
router.post("/user", user.register);
router.put("/user/:id", Secure.authenticateJWT, user.update);
router["delete"]("/user/:id", Secure.authenticateJWT, user["delete"]);
router.post("/user/authentification", user.authentification);
module.exports = router;