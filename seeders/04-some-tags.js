"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "tags",
      [
        {
          title: "great",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "bad",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "simple",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "horny",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "sexy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("tags", null, {});
  },
};