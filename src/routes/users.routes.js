const express = require("express");
const router = express.Router();
const user  = require("../controllers/user.controller");
const Secure = require("../middleware/secureRoute.middleware");


router.get("/user",Secure.authenticateJWT,user.findAll);
router.get("/user/:id",Secure.authenticateJWT,user.findById);
router.post("/user",user.register);
router.put("/user/:id",Secure.authenticateJWT,user.update);
router.delete("/user/:id",Secure.authenticateJWT, user.delete);
router.post("/user/authentification", user.authentification);

//router.post("/users",users.Create)
module.exports = router
