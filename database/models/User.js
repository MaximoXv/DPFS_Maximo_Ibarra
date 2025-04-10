
module.exports = (sequelize, DataTypes) => {
    const alias = "User";
    const cols = {
      fullname: {
        type: DataTypes.STRING(255),
        validate: {
          min: 3,
        },
      },
      direction: {
        type: DataTypes.STRING,
      },
      phonenumber: {
        type: DataTypes.INTEGER(11),
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      avatar: {
        type: DataTypes.STRING,
      },
      role_id: {
        type: DataTypes.INTEGER(11),
        references: {
            model: "roles",
            key: "id"
        }
      }

    };
    const config = {
      tableName: "users",
      paranoid: true,
    };
  
    const User = sequelize.define(alias, cols, config);
  
    User.associate = (model) => {
      // Asociacion categorias
      User.belongsTo(model.Role, {
        as: "role",
        foreignKey: "role_id",
      });
    };
  
    return User;
  };