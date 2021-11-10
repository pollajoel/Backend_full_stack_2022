const express = require("express");
const router = express.Router();
const users  = require("../controllers/user.controller");


router.get("/users",users.findAll)
router.post("/users",users.Create)
module.exports = router
