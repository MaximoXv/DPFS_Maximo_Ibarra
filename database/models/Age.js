
module.exports = (sequelize, DataTypes) => {
    const alias = "Age";
    const cols = {
      name: {
        type: DataTypes.STRING,
      },
    };
    const config = {
      tableName: "ages",
      paranoid: true,
    };
  
    const Age = sequelize.define(alias, cols, config);
  
    Age.associate = (model) => {
        Age.hasMany(model.Product, {
          foreignKey: 'age_id'
        });
      };
  
    return Age;
  };