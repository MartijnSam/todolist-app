'use strict';
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define('TodoItem', {
    task: DataTypes.STRING,
    deadline: DataTypes.STRING
  }, {});
  TodoItem.associate = function(models) {
    TodoItem.belongsTo(models.TodoList)
    TodoItem.belongsToMany(models.tag, {
      through: "itemTags",
      foreignKey: "todoItemId",
    })
  };
  return TodoItem;
};