const express = require("express");
const router = express.Router();
const indexApiController = require("../controllers/index.api.controllers");

router.get("/getTotals",indexApiController.getTotals);



module.exports = router;