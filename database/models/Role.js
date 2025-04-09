
module.exports = (sequelize, DataTypes) => {
    const alias = "Role";
    const cols = {
      name: {
        type: DataTypes.STRING,
      },
    };
    const config = {
      tableName: "roles",
      paranoid: true,
    };
  
    const Role = sequelize.define(alias, cols, config);
  
    Role.associate = (model) => {
        Role.hasMany(model.User, {
          foreignKey: 'role_id'
        });
      };
  
    return Role;
  };