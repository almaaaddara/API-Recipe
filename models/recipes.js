'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recipes.hasMany(models.Favorites, {
        foreignKey: 'recipe_id',
        targetKey: 'id',
        allowNull: 'false',
        onDelete: 'CASCADE',
      });

      Recipes.hasMany(models.Recipe_Ingredients, {
        foreignKey: 'recipe_id',
        targetKey: 'id',
        allowNull: 'false',
        onDelete: 'CASCADE',
      });

      Recipes.hasMany(models.Steps, {
        foreignKey: 'recipe_id',
        targetKey: 'id',
        allowNull: 'false',
        onDelete: 'CASCADE',
      });
    }
  }
  Recipes.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    cook_time: {
      type: DataTypes.STRING,
      allowNull: false
    },
    servings: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: {
      type: DataTypes.STRING,
    },
    user_id: {
      types: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Recipes',
  });
  return Recipes;
};