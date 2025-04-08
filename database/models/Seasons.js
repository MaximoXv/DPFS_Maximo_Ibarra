
module.exports = (sequelize, DataTypes) => {
    const alias = "Season";
    const cols = {
      nombre: {
        type: DataTypes.STRING,
      },
    };
    const config = {
      tableName: "seasons",
      paranoid: true,
    };
  
    const Season = sequelize.define(alias, cols, config);
  
    Season.associate = (models) => {
        Season.hasMany(models.Category, {
          foreignKey: 'temporada_id'
        });
      };
  
    return Season;
  };