const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products.controllers");
const upload = require("../middleware/multer");
//const {getProductPage,getCartPage} = require("../controllers/products.controllers")

//router
//.get("/detail", getProductPage)
//.get("/cart", getCartPage)

router.get("/detail/:id",productsController.detail);
router.get("/cart",productsController.cart);
router.get("/add",productsController.addPage);
router.post("/add",upload.single("image"), productsController.create);
router.get("/edit/:id",productsController.editPage);
router.put("/edit/:id",upload.single("image"), productsController.update);
router.delete("/delete/:id", productsController.destroy);


module.exports = router;