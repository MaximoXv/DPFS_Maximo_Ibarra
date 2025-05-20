const express = require("express");
const router = express.Router();
const usersApiController = require("../controllers/users.api.controller");



router.get("/users",usersApiController.getUsers);


module.exports = router;