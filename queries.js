const User = require("./models").user
const TodoItem = require("./models").TodoItem

async function getAllUsers(){
try {
    // Select all rows. Resolves with a (possibly empty) array
    const allUsers = await User.findAll();
    // // Select all rows where firstName === 'Dave', but only return the first one.
    // // Resolves with an object or undefined (if no matching rows exist)
    const specificUser = await User.findOne({ where: { id: 2 } });
    // // Select a row by its primary key. Resolves with an object or undefined (if no matching rows exist)
    // const userByPk = await User.findByPk(3);
    // // A query using a numeric operator
    // const Op = Sequelize.Op;
    // const tallUsers = await User.findAll({
    //   // WHERE height >= 175
    //   where: {
    //     height: {
    //       [Op.gte]: 175, // gte stands for 'greater than or equal'
    //     },
    //   },
    // });
    console.log(`all the users: `, allUsers)
    const allTodoItems = await TodoItem.findAll();
    allTodoItemsPlain = allTodoItems.map((item)=>item.get({plain: true}))
    console.log(`all todo-items:`, allTodoItemsPlain)
    console.log(`specific user:`, specificUser)
  } catch (error) {
    console.log(error);
  }}

  getAllUsers()