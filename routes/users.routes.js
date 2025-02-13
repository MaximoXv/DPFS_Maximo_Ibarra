const express = require("express");
const router = express.Router();
const usersControllers = require("../controllers/users.controllers")

router.get("/login", usersControllers.getLogin);
router.get("/register",usersControllers.getRegister);
router.post("/register", usersControllers.processRegister)

module.exports = router;