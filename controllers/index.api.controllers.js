const db = require("../database/models");

const indexApiController = {
  getTotals: async (req, res) => {
    try {
      const [totalProducts, totalUsers] = await Promise.all([
        db.Product.count(),
        db.User.count(),
      ]);

      const genres = await db.Genre.count();
      const ages = await db.Age.count();
      const seasons = await db.Season.count();
      const totalCategories = genres + ages + seasons;

      res.json({
        totalProducts,
        totalUsers,
        totalCategories,
      });
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = indexApiController;
