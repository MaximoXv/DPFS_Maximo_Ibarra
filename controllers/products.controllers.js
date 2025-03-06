let fs = require("fs")
let path = require("path");

const productsPath = path.join(__dirname, "..", "data", "ropa.json")

const productsController = {
    detail: (req,res)=>{
        let products = JSON.parse(fs.readFileSync(productsPath, "utf-8"))
        const productFound = products.find((product)=>product.id == req.params.id)
        res.render("products/detail.ejs", {productFound})
    },
    cart: (req,res)=>{
        res.render("products/cart.ejs")
    },
    addPage: (req,res)=>{
        res.render("products/add.ejs")
    },
    create: (req,res)=>{
        let products = JSON.parse(fs.readFileSync(productsPath, "utf-8"))
        // const {name,brand,model, description,price,stock,categorySeason,categoryAge, color} = req.body;
        let colors = [];
        let sizes = [];
        req.body.color1?colors.push(req.body.color1):"";
        req.body.color2?colors.push(req.body.color2):"";
        req.body.color3?colors.push(req.body.color3):"";
        req.body.color4?colors.push(req.body.color4):"";
        req.body.size1?sizes.push(req.body.size1):"";
        req.body.size2?sizes.push(req.body.size2):"";
        req.body.size3?sizes.push(req.body.size3):"";
        req.body.size4?sizes.push(req.body.size4):"";
        req.body.size5?sizes.push(req.body.size5):"";
        req.body.size6?sizes.push(req.body.size6):"";

        //checkear que los name de los inputs esten bien puestos
        let newClothe = {
            id: products[products.length - 1].id + 1,
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
      imagen: req.file? req.file.filename : "imagendefault.jpg",
      visibilidad: req.body.visibility
        }
        console.log("aca va el body",req.body)
        console.log("aca va el file",req.file);
        

        products.push(newClothe);
        fs.writeFileSync(productsPath, JSON.stringify(products, null, " "))
        console.log("se creó correctamente");
        
        res.redirect("/")
    },
    editPage: (req,res)=>{
        let products = JSON.parse(fs.readFileSync(productsPath, "utf-8"))
        const productFound = products.find((product)=>product.id == req.params.id)
        res.render("products/edit.ejs", {productFound})
    },
    update: (req,res)=>{
        console.log(req.body);
        console.log(req.file);
        let products = JSON.parse(fs.readFileSync(productsPath, "utf-8"))
        let productFound = products.find((product)=>product.id == req.params.id)
        let colors = [];
        let sizes = [];
        req.body.color1?colors.push(req.body.color1):"";
        req.body.color2?colors.push(req.body.color2):"";
        req.body.color3?colors.push(req.body.color3):"";
        req.body.color4?colors.push(req.body.color4):"";
        req.body.size1?sizes.push(req.body.size1):"";
        req.body.size2?sizes.push(req.body.size2):"";
        req.body.size3?sizes.push(req.body.size3):"";
        req.body.size4?sizes.push(req.body.size4):"";
        req.body.size5?sizes.push(req.body.size5):"";
        req.body.size6?sizes.push(req.body.size6):"";


            productFound.id = productFound.id;
            productFound.nombre = req.body.name || productFound.nombre;
            productFound.marca = req.body.brand|| productFound.marca;
      productFound.modelo = req.body.model|| productFound.modelo;
      productFound.descripcion = req.body.description|| productFound.descripcion;
      productFound.precio = req.body.price|| productFound.precio;
      productFound.stock = req.body.stock|| productFound.stock;
      productFound.categorias = {
        estacion: req.body.categorySeason|| productFound.categorias.estacion,
        edad: req.body.categoryAge|| productFound.categorias.edad,
        genero: req.body.categoryGenre|| productFound.categorias.genero,
      }|| productFound.categorias;
      productFound.colores= colors|| productFound.colores;
      productFound.tamaños= sizes|| productFound.tamaños;
      productFound.imagen= req.file? req.file.filename : productFound.imagen;
      productFound.visibilidad= req.body.visibility || productFound.visibilidad;
        

        fs.writeFileSync(productsPath, JSON.stringify(products, null, " "))
        res.redirect("/")
        
    },
    destroy:(req,res)=>{
        let products = JSON.parse(fs.readFileSync(productsPath, "utf-8"));
        const productFound = products.find(product=>product.id == req.params.id);
        if(productFound.imagen != "imagendefault.jpg"){
            fs.unlinkSync(path.join(__dirname, "..", "public", "images",productFound.imagen));
        }
        products = products.filter(product=>product.id != req.params.id);
        fs.writeFileSync(productsPath, JSON.stringify(products, null, " "));
        res.redirect("/")
    }
}

module.exports = productsController;