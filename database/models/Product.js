// const Category = require("./Category");

module.exports = (sequelize, DataTypes) => {
  const alias = "Product";
  const cols = {
    name: {
      type: DataTypes.STRING(255),
      validate: {
        min: 3,
      },
    },
    description: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.INTEGER(11),
    },
    stock: {
      type: DataTypes.INTEGER(11),
    },
    visibility: {
        type: DataTypes.BOOLEAN,
    },
    category_id: {
      type: DataTypes.INTEGER(11),
      references: {
        model: 'categories',
        key: 'id'
      }
    },
    branch_id: {
        type: DataTypes.INTEGER(11),
        references: {
            model: 'branches',
            key: 'id'
          }
    }
  };
  const config = {
    tableName: "products",
    paranoid: true,
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = (model) => {
    // Asociacion categorias
    Product.belongsTo(model.Category, {
      as: "category",
      foreignKey: "category_id",
    });
    Product.belongsTo(model.Branch, {
      as: "branch",
      foreignKey: "branch_id",
    });
    // Asociacion a muchos
    Product.belongsToMany(model.Color, {
      through: "ColorProduct",
      foreignKey: "product_id",
      otherKey: "color_id"
    });
    Product.belongsToMany(model.Size, {
        through: "SizeProduct",
        foreignKey: "product_id",
        otherKey: "size_id"
      });
      Product.belongsToMany(model.Image, {
        through: "ImageProduct",
        foreignKey: "product_id",
        otherKey: "image_id"
      });
  };

  return Product;
};