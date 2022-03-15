'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      Comment.belongsTo(models.User, { foreignKey: 'user_id'})
      Comment.belongsTo(models.Meme, { foreignKey: 'meme_id'})
    }
  }
  Comment.init({
    user_id: DataTypes.INTEGER,
    content: DataTypes.TEXT,
    meme_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
