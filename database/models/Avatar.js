
module.exports = (sequelize, DataTypes) => {
    const alias = "Avatar";
    const cols = {
      url: {
        type: DataTypes.STRING,
      },
    };
    const config = {
      tableName: "avatars",
      paranoid: true,
    };
  
    const Avatar = sequelize.define(alias, cols, config);
  
    Avatar.associate = (model) => {
        Avatar.hasMany(model.Product, {
          foreignKey: 'avatar_id'
        });
      };
  
    return Avatar;
  };