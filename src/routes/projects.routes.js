const express = require("express");
const router = express.Router();
const projects  = require("../controllers/projects.controller");
const Secure = require("../middleware/secureRoute.middleware");

router.get("/projects", Secure.authenticateJWT, projects.findAll)
router.get("/project/:id", Secure.authenticateJWT, projects.findById);
router.post("/project", Secure.authenticateJWT, projects.create)
router.put("/project/:id", Secure.authenticateJWT, projects.update);
router.delete("/project/:id", Secure.authenticateJWT, projects.delete);
module.exports = router
