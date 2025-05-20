const db = require("../database/models");

const productsApiController = {
  getProducts: async (req, res) => {
    const products = await db.Product.findAll({
      include: [
        { model: db.Season, as: "season" },
        { model: db.Age, as: "age" },
        { model: db.Genre, as: "genre" },
        { model: db.Branch, as: "branch" },
        { model: db.Image, through: { attributes: [] } },
        { model: db.Color, through: { attributes: [] } },
        { model: db.Size, through: { attributes: [] } },
      ],
    });
    res.json(products);
  },
  getSales: async (req, res) => {
    try {
      const sales = await db.Sale.findAll({
        include: [
          {
            model: db.Product,
            as: "product",
            include: [
              {
                model: db.Branch,
                as: "branch",
              },
              { model: db.Image, through: { attributes: [] } },
            ],
          },
        ],
      });
      res.json(sales);
    } catch (error) {
      console.log(error);
    }
  },
  getLastProduct: async (req, res) => {
    try {
      const product = await db.Product.findOne({
        order: [["createdAt", "DESC"]],
        include: [
          { model: db.Season, as: "season" },
          { model: db.Age, as: "age" },
          { model: db.Genre, as: "genre" },
          { model: db.Branch, as: "branch" },
          { model: db.Image, through: { attributes: [] } },
          { model: db.Color, through: { attributes: [] } },
          { model: db.Size, through: { attributes: [] } },
        ],
      });
      res.json(product);
    } catch (error) {
      console.log(error);
    }
  },
  getAgeCategories: async (req, res) => {
    try {
      const agesWithProductCount = await db.Age.findAll({
        attributes: [
          "id",
          "name",
          [
            db.Sequelize.fn("COUNT", db.Sequelize.col("products.id")),
            "productCount",
          ],
        ],
        include: [
          {
            model: db.Product,
            as: "products",
            attributes: [],
            required: false,
          },
        ],
        group: ["Age.id", "Age.name"],
      });

      res.json(agesWithProductCount);
    } catch (error) {
      console.log(error);
    }
  },
  getBranchSales: async (req, res) => {
    try {
      const { Sale, Product, Branch, Sequelize } = db;
      const { Op } = Sequelize;

      // Paso 1: Definí las fechas que querés evaluar
      const dateStrings = [
        "2025-01-01",
        "2025-02-01",
        "2025-03-01",
        "2025-04-01",
        "2025-05-01",
      ];

      // Convertir strings a objetos Date (inicio de día)
      const dateRanges = dateStrings.map((date) => ({
        start: new Date(new Date(date).setHours(0, 0, 0, 0)),
        end: new Date(new Date(date).setHours(23, 59, 59, 999)),
      }));

      // Rango total para traer todas las ventas necesarias
      const overallStart = dateRanges[0].start;
      const overallEnd = dateRanges[dateRanges.length - 1].end;

      // Paso 2: Traer todas las ventas en el rango de fechas, con su branch
      const sales = await Sale.findAll({
        where: {
          createdAt: {
            [Op.between]: [overallStart, overallEnd],
          },
        },
        include: [
          {
            model: Product,
            as: "product",
            attributes: ["branch_id"],
            include: [
              {
                model: Branch,
                as: "branch",
                attributes: ["id", "name"],
              },
            ],
          },
        ],
      });

      // Paso 3: Procesar los resultados y agrupar por branch + fechas
      const branchMap = {};

      sales.forEach((sale) => {
        const branch = sale.product.branch;
        if (!branch) return;

        const branchId = branch.id;
        const branchName = branch.name;

        if (!branchMap[branchId]) {
          branchMap[branchId] = {
            branchId,
            branchName,
            salesCount: Array(dateRanges.length).fill(0),
          };
        }

        const saleDate = new Date(sale.createdAt);

        // Buscar a qué fecha corresponde
        dateRanges.forEach((range, index) => {
          if (saleDate >= range.start && saleDate <= range.end) {
            branchMap[branchId].salesCount[index]++;
          }
        });
      });

      // Paso 4: Convertir el map a array
      const result = Object.values(branchMap);

      res.json(result);
    } catch (error) {
        console.log(error);
        
    }
  },
};

module.exports = productsApiController;
