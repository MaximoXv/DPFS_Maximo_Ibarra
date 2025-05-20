module.exports = (sequelize, DataTypes) => {
  const alias = "Sale";
  const cols = {
    status: {
      type: DataTypes.STRING(255),
      validate: {
        min: 3,
      },
    },
    price: {
      type: DataTypes.INTEGER(11),
    },
    product_id: {
      type: DataTypes.INTEGER(11),
      references: {
        model: "products",
        key: "id",
      },
    },
  };
  const config = {
    tableName: "sales",
    paranoid: true,
  };

  const Sale = sequelize.define(alias, cols, config);

  Sale.associate = (model) => {
    Sale.belongsTo(model.Product, {
      as: "product",
      foreignKey: "product_id",
    });
  };

  return Sale;
};
