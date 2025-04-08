
module.exports = (sequelize, DataTypes) => {
    const alias = "Color";
    const cols = {
      nombre: {
        type: DataTypes.STRING(255),
        validate: {
          min: 3,
        },
      },
      valor: {
        type: DataTypes.STRING,
      },
    };
    const config = {
      tableName: "colors",
      paranoid: true,
    };
  
    const Color = sequelize.define(alias, cols, config);
  
    Color.associate = (model) => {
        // Definimos la relación muchos a muchos con Producto
        Color.belongsToMany(model.Product, {
          through: 'ColorProduct',
          foreignKey: 'color_id',
          otherKey: 'producto_id'
        });
      };
  
    return Color;
  };