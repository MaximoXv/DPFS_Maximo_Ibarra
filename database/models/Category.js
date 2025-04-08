

module.exports = (sequelize, DataTypes) => {
    const alias = "Category";
    const cols = {
      genero_id: {
        type: DataTypes.INTEGER(11),
        references: {
            model: 'genres',
            key: 'id'
          }
      },
      edad_id: {
        type: DataTypes.INTEGER(11),
        references: {
            model: 'ages',
            key: 'id'
          }
      },
      temporada_id: {
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
          foreignKey: 'categoria_id'
        });
        Category.belongsTo(model.Genre, {
          as: "genero",
          foreignKey: "genero_id",
        });
        Category.belongsTo(model.Age, {
          as: "edad",
          foreignKey: "edad_id",
        });
        Category.belongsTo(model.Season, {
          as: "temporada",
          foreignKey: "temporada_id",
        });
      };

  
    return Category;
  };