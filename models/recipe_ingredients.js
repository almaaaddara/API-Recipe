'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe_Ingredients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recipe_Ingredients.belongsTo(models.Recipes, {
        foreignKey: 'recipe_id',
        targetKey: 'id',
        allowNull: 'false',
        onDelete: 'CASCADE',
      });

      Recipe_Ingredients.belongsToMany(models.Ingredients, {
        foreignKey: 'ingredient_id',
        targetKey: 'id',
        allowNull: 'false',
        onDelete: 'CASCADE',
      });
    }
  }
  Recipe_Ingredients.init({
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    recipe_id: DataTypes.INTEGER,
    ingredient_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recipe_Ingredients',
  });
  return Recipe_Ingredients;
};