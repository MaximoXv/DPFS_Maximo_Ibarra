let fs = require("fs")
let path = require("path");

const clothesPath = path.join(__dirname, "..", "data", "ropa.json")

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
    getProductEditPage: (req,res)=>{
        res.render("productEdit.ejs")
    },
    store: (req,res)=>{
        let clothes = JSON.parse(fs.readFileSync(ropasPath, "utf-8"))

        //checkear que los name de los inputs esten bien puestos
        let newClothe = {
            id: clothes[clothes.length - 1].id + 1,
            nombre: req.body.name,
            marca: req.body.brand,
      modelo: req.body.model,
      descripcion: req.body.description,
      precio: req.body.price,
      stock: req.body.stock,
      categorias: {
        estacion: req.body.categorySeason,
        edad: req.body.categoryAge,
        genero: req.body
      },
      colores: ["rojo", "azul", "gris"],
      tamaños: ["s", "m", "l"],
      imagen: "https://www.ejemplo.com/imagenes/abrigo_lana_infantil.jpg",
      visibilidad: "publico"
        }
        console.log(req.body)

        clothes.push(newClothe);
        fs.writeFileSync(clothesPath, JSON.stringify(clothes, null, " "))
        console.log("se creó correctamente");
        
        res.redirect("/")
    },
}

module.exports = productsController;