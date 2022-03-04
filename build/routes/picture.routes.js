"use strict";

var express = require("express");

var router = express.Router();

var picture = require("../controllers/picture.controller");

router.get("/picture", picture.findAll);
module.exports = router;