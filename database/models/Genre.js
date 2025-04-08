
module.exports = (sequelize, DataTypes) => {
    const alias = "Genre";
    const cols = {
      nombre: {
        type: DataTypes.STRING,
      },
    };
    const config = {
      tableName: "genres",
      paranoid: true,
    };
  
    const Genre = sequelize.define(alias, cols, config);
  
    Genre.associate = (model) => {
        Genre.hasMany(model.Category, {
          foreignKey: 'genero_id'
        });
      };
  
    return Genre;
  };