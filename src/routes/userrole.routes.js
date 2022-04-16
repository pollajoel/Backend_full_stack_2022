const express = require("express");
const router = express.Router();
const roles  = require("../controllers/userroles.controller");
const Secure = require("../middleware/secureRoute.middleware");

router.get("/roles", Secure.authenticateJWT, roles.findAll);
router.post("/role", Secure.authenticateJWT, roles.create);
router.get("/role/:id", Secure.authenticateJWT, roles.findById);
router.put("/role/:id", Secure.authenticateJWT, roles.update);
router.delete("/role/:id", Secure.authenticateJWT, roles.delete);
 module.exports = router;
