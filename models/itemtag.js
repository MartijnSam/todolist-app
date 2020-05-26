'use strict';
module.exports = (sequelize, DataTypes) => {
  const itemTag = sequelize.define('itemTag', {
    todoItemId: DataTypes.INTEGER,
    tagId: DataTypes.INTEGER
  }, {});
  itemTag.associate = function(models) {
    itemTag.belongsTo(models.TodoItem)
    itemTag.belongsTo(models.tag)
  };
  return itemTag;
};