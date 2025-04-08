
module.exports = (sequelize, DataTypes) => {
    const alias = "Image";
    const cols = {
      URL: {
        type: DataTypes.STRING(255),

      },
    };
    const config = {
      tableName: "images",
      paranoid: true,
    };
  
    const Image = sequelize.define(alias, cols, config);
  
    Image.associate = (model) => {
        Image.belongsToMany(model.Product, {
          through: 'ImageProduct',
          foreignKey: 'imagen_id',
          otherKey: 'producto_id'
        });
      };
  
    return Image;
  };