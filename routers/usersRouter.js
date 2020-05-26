const {Router } = require("express")
const router = new Router()
const User = require("../models").user;
const TodoList = require("../models").TodoList;

router.get("/", async (req, res, next) => {
    try {
        const users = await User.findAll();
        if (!users){
            res.status(404).send("No users were found")
        }
        else 
        res.json(users);
      }
    catch (e) {
      next(e);
    }
  });

router.post("/", async (req, res, next) => {
    try {
      const email = req.body.email;
      if (!email || email === " ") {
        res.status(400).send("Must provide an email address");
      } else {
        const user = await User.create(req.body);
        res.json(user);
      }
    } catch (e) {
      next(e);
    }
  });

  router.get("/:userId", async (req, res, next) => {
    try {
        const idParam = parseInt(req.params.userId)
        const user = await User.findByPk(idParam);
        if (!user){
            res.status(404).send("User not found")
        }
        else 
        res.json(user);
      }
    catch (e) {
      next(e);
    }
  });


  router.put("/:userId", async (req, res, next) => {
    try {
      const userId = parseInt(req.params.userId);
      const userToUpdate = await User.findByPk(userId);
      if (!userToUpdate) {
        res.status(404).send("User not found");
      }
      else { const updatedUser = await userToUpdate.update(req.body);
        res.json(updatedUser);
      }
    } catch (e) {
      next(e);
    }
  });

  router.get("/users/:userId/lists", async (req, res, next) => {
    try {
      const userId = parseInt(req.params.userId);
      const user = await User.findByPk(userId, {
        include: [TodoList],
      });
      if (user) {
        res.send(user.TodoLists);
      } else {
        res.status(404).send("User not found");
      }
    } catch (e) {
      next(e);
    }
  });

  router.post("/users/:userId/lists", async (req, res, next) => {
    try {
      const checkUserIdParam = parseInt(req.params.userId);
      const checkUserIdBody = parseInt(req.body.userId);
      const userParam = await User.findByPk(checkUserIdParam);
      const userBody = await User.findByPk(checkUserIdBody)
      if (!userParam | !userBody) {
        res.status(404).send("User not found, must provide a valid userId");
      } 
      else {
        const todolist = await TodoList.create(req.body);
        res.json(todolist);
      }
    } catch (e) {
      next(e);
    }
  });

  router.put("/users/:userId/lists/:listId", async (req, res, next) => {
   try {
    const userIdParam = parseInt(req.params.userId);
    const listIdParam = parseInt(req.params.listId)
    const user = await User.findByPk(userIdParam);
    const todoListToUpdate = await TodoList.findByPk(listIdParam)
 
    
    if (!user) {
      res.status(404).send("User parameter not found, must provide a valid userId");
    } 
    if (!todoListToUpdate) {
        res.status(404).send("TodoList not found, must provide a valid todoListId")
    }
    if (req.body.userId) {
        const UpdateUserCheck = await User.findByPk(parseInt(req.body.userId))
        if (!UpdateUserCheck){res.status(404).send("User for updated list not found, must provide a valid userId")}
           else 
                { const updatedTodoList = await todoListToUpdate.update(req.body);
                    res.json(updatedTodoList);}}
    else 
    { const updatedTodoList = await todoListToUpdate.update(req.body);
        res.json(updatedTodoList);}
      
    } catch (e) {
  next(e);
}
});

router.delete("/users/:userId/lists/:listId", async (req, res, next) => {
    try {
     const userIdParam = parseInt(req.params.userId);
     const listIdParam = parseInt(req.params.listId)
     const user = await User.findByPk(userIdParam);
     const todoListToDelete = await TodoList.findByPk(listIdParam)
     
     if (!user) {
       res.status(404).send("User parameter not found, must provide a valid userId");
     } 
     if (!todoListToDelete) {
         res.status(404).send("TodoList not found, must provide a valid todoListId")
     }
     else 
     { await todoListToDelete.destroy()
        res.status(204).send("List was deleted");}
       
     } catch (e) {
   next(e);
 }
 });

  module.exports = router