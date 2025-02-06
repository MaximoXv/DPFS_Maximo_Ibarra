let fs = require("fs")
const path = require("path");
const productsPath = path.join(__dirname,"..","data","ropa.json")

const indexController = {
    getHome: (req,res)=>{
        const products = JSON.parse(fs.readFileSync(productsPath,"utf-8"))
        res.render("home.ejs", {products})
    }
}

module.exports = indexController;