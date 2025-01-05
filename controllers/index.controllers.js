const indexController = {
    getHome: (req,res)=>{
        res.render("home.ejs")
    },
    getProductPage: (req,res)=>{
        res.render("productDetail.ejs")
    },
    getCartPage: (req,res)=>{
        res.render("cart.ejs")
    }
}

module.exports = indexController;