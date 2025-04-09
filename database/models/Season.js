
module.exports = (sequelize, DataTypes) => {
    const alias = "Season";
    const cols = {
      name: {
        type: DataTypes.STRING,
      },
    };
    const config = {
      tableName: "seasons",
      paranoid: true,
    };
  
    const Season = sequelize.define(alias, cols, config);
  
    Season.associate = (models) => {
        Season.hasMany(models.Product, {
          foreignKey: 'season_id'
        });
      };
  
    return Season;
  };