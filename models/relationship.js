'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Relationship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Relationship.belongsToMany(models.User,{
        through : 'UserRelationships',
        foreignKey: 'RelationshipId'
      })
    }
  };
  Relationship.init({
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Relationship',
  });
  return Relationship;
};