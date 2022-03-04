const express = require("express");
const router = express.Router();
const task  = require("../controllers/task.controller");
const Secure = require("../middleware/secureRoute.middleware");

router.get("/tasks", Secure.authenticateJWT, task.findAll);
router.post("/task", Secure.authenticateJWT, task.create);
router.get("/task/:id", Secure.authenticateJWT, task.findById);
router.put("/task/:id", Secure.authenticateJWT, task.update);
router.delete("/task/:id", Secure.authenticateJWT, task.delete);
 module.exports = router;
