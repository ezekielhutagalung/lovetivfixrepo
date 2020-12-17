'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserRelationship extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  UserRelationship.init({
    UserId: DataTypes.INTEGER,
    RelationshipId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'UserRelationship',
  });
  return UserRelationship;
};