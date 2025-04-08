
module.exports = (sequelize, DataTypes) => {
    const alias = "Branch";
    const cols = {
      name: {
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
          foreignKey: 'branch_id'
        });
      };
  
    return Branch;
  };