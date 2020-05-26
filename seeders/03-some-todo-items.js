"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "TodoItems",
      [
        {
          task: "make pretty",
          deadline: "now",
          todoListId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
          
        },
        {
          task: "lose weight",
          deadline: "yesterday",
          todoListId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
          
        },
        {
          task: "pleasure",
          deadline: "yesterday",
          todoListId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
         
        },
        {
          task: "do something",
          deadline: "yesterday",
          todoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
          
        },
        {
          task: "learn to code",
          deadline: "yesterday",
          todoListId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
          
        },
        {
          task: "hihaha",
          deadline: "yesterday",
          todoListId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
          
        },
      
      
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("TodoItem", null, {});
  },
};