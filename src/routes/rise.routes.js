const express = require("express");
const router = express.Router();
const rises  = require("../controllers/rise.controller");


router.get("/rises",rises.findAll)
router.post("/rise",rises.Create)
module.exports = router
