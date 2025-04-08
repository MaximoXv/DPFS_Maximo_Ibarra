
module.exports = (sequelize, DataTypes) => {
    const alias = "Genre";
    const cols = {
      name: {
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
          foreignKey: 'genre_id'
        });
      };
  
    return Genre;
  };