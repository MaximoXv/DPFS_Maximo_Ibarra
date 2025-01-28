let fs = require("fs")
const path = require("path");
const productsPath = path.join(__dirname,"..","data","ropa")

const indexController = {
    getHome: (req,res)=>{
        const products = JSON.parse(fs.readFileSync(productsPath,"utf-8"))
        res.render("home.ejs", {products})
    },
    getProductPage: (req,res)=>{
        res.render("productDetail.ejs")
    },
    getCartPage: (req,res)=>{
        res.render("cart.ejs")
    }
}

module.exports = indexController;