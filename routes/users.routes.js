const express = require("express");
const router = express.Router();
const usersControllers = require("../controllers/users.controllers")
const {uploadUser} = require("../middleware/multer");

router.get("/login", usersControllers.login);
router.get("/register",usersControllers.register);
router.post("/register",uploadUser.single("profile_picture"), usersControllers.processRegister)

module.exports = router;