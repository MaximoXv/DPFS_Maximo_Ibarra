const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controllers");
const {uploadProd} = require("../middleware/multer");
const guestAuth = require("../middleware/guestAuth");
//const {getProductPage,getCartPage} = require("../controllers/products.controllers")

//router
//.get("/detail", getProductPage)
//.get("/cart", getCartPage)

router.get("/detail/:id",productsController.detail);
router.get("/cart", guestAuth,productsController.cart);
router.get("/add", guestAuth,productsController.addPage);
router.post("/add", guestAuth,uploadProd.single("image"), productsController.create);
// router.post("/add", guestAuth,uploadProd.any("image"), productsController.create);
router.get("/edit/:id", guestAuth,productsController.editPage);
router.put("/edit/:id", guestAuth,uploadProd.single("image"), productsController.update);
router.delete("/delete/:id", productsController.destroy);


module.exports = router;