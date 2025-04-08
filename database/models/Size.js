
module.exports = (sequelize, DataTypes) => {
    const alias = "Size";
    const cols = {
      nombre: {
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
          foreignKey: 'tamaño_id',
          otherKey: 'producto_id'
        });
      };
  
    return Size;
  };