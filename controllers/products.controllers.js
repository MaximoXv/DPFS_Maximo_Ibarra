let fs = require("fs")
let path = require("path");
const db = require("../database/models");
const { validationResult } = require("express-validator");


const productsController = {
    detail: async (req,res)=>{
        const productFound = await db.Product.findOne({
            where: {
                id: req.params.id
            },
            include: [{model: db.Season, as: "season"},{model: db.Age, as: "age"},{model: db.Genre, as: "genre"},{model: db.Branch, as: "branch"},{model: db.Image,through: { attributes: [] }},{model: db.Color,through: { attributes: [] }},{model: db.Size,through: { attributes: [] }}]
        })
        res.render("products/detail.ejs", {productFound})
    },
    cart: (req,res)=>{
        res.render("products/cart.ejs")
    },
    addPage: async(req,res)=>{
        try {
            const seasonsDB = await db.Season.findAll();
            const agesDB = await db.Age.findAll();
            const sizesDB = await db.Size.findAll();
            const genresDB = await db.Genre.findAll();
            const branchesDB = await db.Branch.findAll();
            const colorsDB = await db.Color.findAll();
            res.render("products/add.ejs", {seasonsDB,agesDB,sizesDB,genresDB,branchesDB,colorsDB});
        } catch (error) {
            console.log(error);
            
        }
    },
    create: async(req,res)=>{
        try {
          const resultValidation = validationResult(req);
      if(resultValidation.isEmpty()){
            const {
              name,
              description,
              model,
              price,
              stock,
              visibility,
              genre_id,
              age_id,
              season_id,
              branch_id,
              colors,
              sizes
            } = req.body;
        
            const product = await db.Product.create({
              name,
              description,
              model,
              price,
              stock,
              visibility,
              genre_id,
              age_id,
              season_id,
              branch_id
            });
        

            if (colors && colors.length > 0) {
              await product.setColors(colors);
            }

            if (sizes && sizes.length > 0) {
              await product.setSizes(sizes);
            }
        
            if (req.file) {
              const image = await db.Image.create({
                url: req.file.filename
              });
        
              await product.addImage(image);
            }
        
            res.redirect("/");
          }else{

            const seasonsDB = await db.Season.findAll();
            const agesDB = await db.Age.findAll();
            const sizesDB = await db.Size.findAll();
            const genresDB = await db.Genre.findAll();
            const branchesDB = await db.Branch.findAll();
            const colorsDB = await db.Color.findAll();
            return res.render("products/add", {
              seasonsDB,agesDB,sizesDB,genresDB,branchesDB,colorsDB,
              errors: resultValidation.mapped(),
              old: req.body,
            });
          }
          } catch (error) {
            console.log(error);
            
          }
    },
    editPage: async(req,res)=>{
        try {
            const productFound = await db.Product.findOne({
                where: {
                    id: req.params.id
                },
                include: [{model: db.Season, as: "season"},{model: db.Age, as: "age"},{model: db.Genre, as: "genre"},{model: db.Branch, as: "branch"},{model: db.Image,through: { attributes: [] }},{model: db.Color,through: { attributes: [] }},{model: db.Size,through: { attributes: [] }}]
            })
            const seasonsDB = await db.Season.findAll();
            const agesDB = await db.Age.findAll();
            const sizesDB = await db.Size.findAll();
            const genresDB = await db.Genre.findAll();
            const branchesDB = await db.Branch.findAll();
            const colorsDB = await db.Color.findAll();
            res.render("products/edit.ejs", {productFound,seasonsDB,agesDB,sizesDB,genresDB,branchesDB,colorsDB,old: null});
        } catch (error) {
            console.log(error);
        }
    },
    update: async(req,res)=>{
      try {
          const { id } = req.params;
  
          const resultValidation = validationResult(req);
          
          if (!resultValidation.isEmpty()) {
            const seasonsDB = await db.Season.findAll();
            const agesDB = await db.Age.findAll();
            const sizesDB = await db.Size.findAll();
            const genresDB = await db.Genre.findAll();
            const branchesDB = await db.Branch.findAll();
            const colorsDB = await db.Color.findAll();
          
            const productFound = await db.Product.findOne({
              where: {
                id: req.params.id
              },
              include: [
                { model: db.Season, as: "season" },
                { model: db.Age, as: "age" },
                { model: db.Genre, as: "genre" },
                { model: db.Branch, as: "branch" },
                { model: db.Image, through: { attributes: [] } },
                { model: db.Color, through: { attributes: [] } },
                { model: db.Size, through: { attributes: [] } },
              ]
            });
          
            return res.render("products/edit", {
              productFound,
              seasonsDB,
              agesDB,
              sizesDB,
              genresDB,
              branchesDB,
              colorsDB,
              old: req.body,
              errors: resultValidation.mapped()
            });
          }
  
          const {
              name,
              description,
              model,
              price,
              stock,
              visibility,
              genre_id,
              age_id,
              season_id,
              branch_id,
              colors,
              sizes
          } = req.body;
          
          const product = await db.Product.findByPk(id);

          if (!product) {
              return res.status(404).send("Producto no encontrado");
          }
  
          await product.update({
              name,
              description,
              model,
              price,
              stock,
              visibility,
              genre_id,
              age_id,
              season_id,
              branch_id
          });
  
          if (colors && colors.length > 0) {
              await product.setColors(colors); 
          }
  
          if (sizes && sizes.length > 0) {
              await product.setSizes(sizes); 
          }
  

          if (req.file) {
              const previousImage = await product.getImages();
              if (previousImage && previousImage.length > 0) {
                  await previousImage[0].destroy();
              }

              const image = await db.Image.create({
                  url: req.file.filename
              });
              
              await product.addImage(image);
          }
  
          res.redirect("/");
  
      } catch (error) {
          console.log(error);
      }
  },
    destroy: async(req,res)=>{
        try {

            const productFound = await db.Product.findOne({
                where: {
                    id: req.params.id
                },
                include: [{model: db.Image,through: { attributes: [] }}]
            })
            const deleted = await db.Product.destroy({
                where: { id: req.params.id }
              });
              productFound.Images.forEach((image)=>{
                  if(image.url != "imagendefault.jpg"){
                    fs.unlinkSync(path.join(__dirname, "..", "public", "images",image.url));
                }
              });
              res.redirect("/")
        } catch (error) {
            console.log(error);      
        }
    }
}

module.exports = productsController;