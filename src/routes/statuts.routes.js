const express = require("express");
const router = express.Router();
const statuts  = require("../controllers/statuts.controller");
const Secure = require("../middleware/secureRoute.middleware");

router.get("/statuts", Secure.authenticateJWT, statuts.findAll);
router.post("/statut", Secure.authenticateJWT, statuts.create);
router.get("/statut/:id", Secure.authenticateJWT, statuts.findById);
router.put("/statut/:id", Secure.authenticateJWT, statuts.update);
router.delete("/statut/:id", Secure.authenticateJWT, statuts.delete);
 module.exports = router;
