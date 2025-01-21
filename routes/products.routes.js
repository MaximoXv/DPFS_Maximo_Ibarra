const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controllers");
//const {getProductPage,getCartPage} = require("../controllers/products.controllers")

//router
//.get("/detail", getProductPage)
//.get("/cart", getCartPage)

router.get("/detail",productsController.getProductPage);
router.get("/cart",productsController.getCartPage);
router.get("/add",productsController.getProductAddPage);
router.get("/edit",productsController.getProductEditPage);
router.post("/create",productsController.store);


module.exports = router;