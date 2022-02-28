"use strict";

var express = require("express");

var router = express.Router();

var task = require("../controllers/task.controller");

var Secure = require("../middleware/secureRoute.middleware");

router.get("/tasks", Secure.authenticateJWT, task.findAll);
router.post("/task", Secure.authenticateJWT, task.create);
router.get("/task/:id", Secure.authenticateJWT, task.findById);
router.put("/task/:id", Secure.authenticateJWT, task.update);
router["delete"]("/task/:id", Secure.authenticateJWT, task["delete"]);
module.exports = router;