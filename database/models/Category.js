

module.exports = (sequelize, DataTypes) => {
    const alias = "Category";
    const cols = {
      genre_id: {
        type: DataTypes.INTEGER(11),
        references: {
            model: 'genres',
            key: 'id'
          }
      },
      age_id: {
        type: DataTypes.INTEGER(11),
        references: {
            model: 'ages',
            key: 'id'
          }
      },
      season_id: {
        type: DataTypes.INTEGER(11),
        references: {
            model: 'seasons',
            key: 'id'
          }
      }
    };
    const config = {
      tableName: "categories",
      paranoid: true,
    };
  
    const Category = sequelize.define(alias, cols, config);
  
    Category.associate = (model) => {
        Category.hasMany(model.Product, {
          foreignKey: 'category_id'
        });
        Category.belongsTo(model.Genre, {
          as: "genre",
          foreignKey: "genre_id",
        });
        Category.belongsTo(model.Age, {
          as: "age",
          foreignKey: "age_id",
        });
        Category.belongsTo(model.Season, {
          as: "season",
          foreignKey: "season_id",
        });
      };

  
    return Category;
  };