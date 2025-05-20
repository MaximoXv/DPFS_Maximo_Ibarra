const express = require("express");
const router = express.Router();
const productsApiController = require("../controllers/products.api.controller");


router.get("/lastProduct",productsApiController.getLastProduct);
router.get("/sales",productsApiController.getSales);
router.get("/products",productsApiController.getProducts);
router.get("/ageCategories",productsApiController.getAgeCategories);
router.get("/branchSales",productsApiController.getBranchSales);


module.exports = router;