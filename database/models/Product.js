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
    branch_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'branches',
            key: 'id'
          }
    },
    genre_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'genres',
        key: 'id'
      }
    },
    age_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'ages',
        key: 'id'
      }
    },
    season_id: {
      type: DataTypes.INTEGER,
      references: {
          model: 'seasons',
          key: 'id'
        }
  },
  };
  const config = {
    tableName: "products",
    paranoid: true,
  };

  const Product = sequelize.define(alias, cols, config);

  Product.associate = (model) => {
    Product.belongsTo(model.Branch, {
      as: "branch",
      foreignKey: "branch_id",
    });
    Product.belongsTo(model.Genre, {
      as: "genre",
      foreignKey: "genre_id",
    });
    Product.belongsTo(model.Age, {
      as: "age",
      foreignKey: "age_id",
    });
    Product.belongsTo(model.Season, {
      as: "season",
      foreignKey: "season_id",
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