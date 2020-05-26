"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("TodoLists", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("TodoItems", "todoListId", {
      type: Sequelize.INTEGER,
      references: {
        model: "TodoLists",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    })
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("TodoLists", "userId");
  },
};