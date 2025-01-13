const productsController = {
    getProductPage: (req,res)=>{
        res.render("productDetail.ejs")
    },
    getCartPage: (req,res)=>{
        res.render("cart.ejs")
    },
    getProductAddPage: (req,res)=>{
        res.render("productAdd.ejs")
    },
}

module.exports = productsController;