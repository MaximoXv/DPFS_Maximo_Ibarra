const express = require("express");
const router = express.Router();
const usersControllers = require("../controllers/users.controllers")
const {uploadUser} = require("../middleware/multer");
const loggedAuth = require("../middleware/loggedAuth");
const guestAuth = require("../middleware/guestAuth");

router.get("/login", loggedAuth, usersControllers.login);
router.post("/login", usersControllers.processLogin);
router.get("/register", loggedAuth,usersControllers.register);
router.post("/register",uploadUser.single("profile_picture"), usersControllers.processRegister);
router.get("/logout", guestAuth,usersControllers.logout);

module.exports = router;