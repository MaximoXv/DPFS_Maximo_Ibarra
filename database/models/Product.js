// const Category = require("./Category");

module.exports = (sequelize, DataTypes) => {
  const alias = "Product";
  const cols = {
    nombre: {
      type: DataTypes.STRING(255),
      validate: {
        min: 3,
      },
    },
    descripcion: {
      type: DataTypes.STRING,
    },
    modelo: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.INTEGER(11),
    },
    stock: {
      type: DataTypes.INTEGER(11),
    },
    visibilidad: {
        type: DataTypes.BOOLEAN,
    },
    categoria_id: {
      type: DataTypes.INTEGER(11),
      references: {
        model: 'categories',
        key: 'id'
      }
    },
    marca_id: {
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
      as: "categoria",
      foreignKey: "categoria_id",
    });
    Product.belongsTo(model.Branch, {
      as: "marca",
      foreignKey: "marca_id",
    });
    // Asociacion a muchos
    Product.belongsToMany(model.Color, {
      through: "ColorProduct",
      foreignKey: "producto_id",
      otherKey: "color_id"
    });
    Product.belongsToMany(model.Size, {
        through: "SizeProduct",
        foreignKey: "producto_id",
        otherKey: "tamaño_id"
      });
      Product.belongsToMany(model.Image, {
        through: "ImageProduct",
        foreignKey: "producto_id",
        otherKey: "imagen_id"
      });
  };

  return Product;
};