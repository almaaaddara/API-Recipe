'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Steps extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Steps.belongsTo(models.Recipes, {
        foreignKey: 'recipe_id',
        targetKey: 'id',
        allowNull: 'false',
        onDelete: 'CASCADE',
      });
    }
  }
  Steps.init({
    step_number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    image: DataTypes.STRING,
    recipe_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Steps',
  });
  return Steps;
};