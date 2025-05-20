const db = require("../database/models");

const indexController = {
  getHome: async (req, res) => {
    try {
      const productsDB = await db.Product.findAll({
        include: [
          { model: db.Season, as: "season" },
          { model: db.Branch, as: "branch" },
          { model: db.Image, through: { attributes: [] } },
        ],
      });
      const seasonsDB = await db.Season.findAll();
      res.render("home.ejs", {
        productsDB,
        seasonsDB,
        user: req.session.userLogged,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = indexController;
