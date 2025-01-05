const express = require("express");
const router = express.Router();
const usersControllers = require("../controllers/users.controllers")

router.get("/login", usersControllers.getLogin);
router.get("/register",usersControllers.getRegister);


module.exports = router;