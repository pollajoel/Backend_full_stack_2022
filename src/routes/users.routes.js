const express = require("express");
const router = express.Router();
const user  = require("../controllers/user.controller");


router.get("/user",user.findAll);
router.get("/user/:id",user.findById);
router.post("/user",user.register);
router.put("/user/:id",user.update);
router.delete("/user/:id", user.delete);

//router.post("/users",users.Create)
module.exports = router
