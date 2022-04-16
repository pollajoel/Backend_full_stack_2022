const express = require("express");
const router = express.Router();
const picture  = require("../controllers/picture.controller")


router.get("/picture",picture.findAll);
module.exports = router
