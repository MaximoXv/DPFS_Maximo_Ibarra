
module.exports = (sequelize, DataTypes) => {
    const alias = "Image";
    const cols = {
      url: {
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
          foreignKey: 'image_id',
          otherKey: 'product_id'
        });
      };
  
    return Image;
  };