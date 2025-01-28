let fs = require("fs")
let path = require("path");

const clothesPath = path.join(__dirname, "..", "data", "ropa.json")

const productsController = {
    getProductPage: (req,res)=>{
        res.render("products/detail.ejs")
    },
    getCartPage: (req,res)=>{
        res.render("products/cart.ejs")
    },
    getProductAddPage: (req,res)=>{
        res.render("products/add.ejs")
    },
    getProductEditPage: (req,res)=>{
        res.render("products/edit.ejs")
    },
    store: (req,res)=>{
        let clothes = JSON.parse(fs.readFileSync(clothesPath, "utf-8"))
        let colors = [];
        const {name,brand,model, description,price,stock,categorySeason,categoryAge, color} = req.body;
        let sizes = [];
        colors.push(req.body.color1)
        colors.push(req.body.color2)
        colors.push(req.body.color3)
        colors.push(req.body.color4)
        sizes.push(req.body.size1)
        sizes.push(req.body.size2)
        sizes.push(req.body.size3)
        sizes.push(req.body.size4)
        sizes.push(req.body.size5)
        sizes.push(req.body.size6)

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
        genero: req.body.categoryGenre,
      },
      colores: colors,
      tamaños: sizes,
      imagen: req.file.filename || "default.png",
      visibilidad: req.body.visibility
        }
        console.log("aca va el body",req.body)
        console.log("aca va el file",req.file);
        

        clothes.push(newClothe);
        fs.writeFileSync(clothesPath, JSON.stringify(clothes, null, " "))
        console.log("se creó correctamente");
        
        res.redirect("/")
    },
}

module.exports = productsController;