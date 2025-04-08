
module.exports = (sequelize, DataTypes) => {
    const alias = "Branch";
    const cols = {
      nombre: {
        type: DataTypes.STRING,
      },
    };
    const config = {
      tableName: "branches",
      paranoid: true,
    };
  
    const Branch = sequelize.define(alias, cols, config);
  
    Branch.associate = (model) => {
        Branch.hasMany(model.Product, {
          foreignKey: 'marca_id'
        });
      };
  
    return Branch;
  };