let fs = require("fs")
const path = require("path");
const productsPath = path.join(__dirname,"..","data","ropa.json")

const indexController = {
    getHome: (req,res)=>{
        const products = JSON.parse(fs.readFileSync(productsPath,"utf-8"))
        const productsPrimavera = products.filter((product)=>{return product.categorias.estacion == "primavera"})
        const productsVerano = products.filter((product)=>{return product.categorias.estacion == "verano"})
        const productsInvierno = products.filter((product)=>{return product.categorias.estacion == "invierno"})
        console.log(productsPrimavera);
        console.log(productsVerano);
        console.log(productsInvierno);
        
        res.render("home.ejs", {productsPrimavera,productsVerano,productsInvierno})
    }
}

module.exports = indexController;