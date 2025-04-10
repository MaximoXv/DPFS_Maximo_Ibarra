let fs = require("fs")
let path = require("path");
const db = require("../database/models");
const { where } = require("sequelize");


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
            res.render("products/edit.ejs", {productFound,seasonsDB,agesDB,sizesDB,genresDB,branchesDB,colorsDB});
        } catch (error) {
            console.log(error);
        }
    },
    update: async(req,res)=>{
        try {
            const { id } = req.params;
        
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