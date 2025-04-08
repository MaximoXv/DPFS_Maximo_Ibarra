
module.exports = (sequelize, DataTypes) => {
    const alias = "Size";
    const cols = {
      name: {
        type: DataTypes.STRING(255),
      },
    };
    const config = {
      tableName: "sizes",
      paranoid: true,
    };
  
    const Size = sequelize.define(alias, cols, config);
  
    Size.associate = (models) => {
        // Definimos la relación muchos a muchos con Producto
        Size.belongsToMany(models.Product, {
          through: 'SizeProduct',
          foreignKey: 'size_id',
          otherKey: 'product_id'
        });
      };
  
    return Size;
  };