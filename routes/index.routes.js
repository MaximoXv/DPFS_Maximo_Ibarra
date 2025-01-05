const express = require("express");
const router = express.Router();
const indexController = require("../controllers/index.controllers");

router.get("/",indexController.getHome);
router.get("/product",indexController.getProductPage);
router.get("/cart",indexController.getCartPage);


module.exports = router;