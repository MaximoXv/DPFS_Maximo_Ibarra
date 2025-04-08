
module.exports = (sequelize, DataTypes) => {
    const alias = "Age";
    const cols = {
      nombre: {
        type: DataTypes.STRING,
      },
    };
    const config = {
      tableName: "ages",
      paranoid: true,
    };
  
    const Age = sequelize.define(alias, cols, config);
  
    Age.associate = (model) => {
        Age.hasMany(model.Category, {
          foreignKey: 'edad_id'
        });
      };
  
    return Age;
  };