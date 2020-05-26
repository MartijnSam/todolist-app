const cors = require("cors")

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000
const User = require("./models").user;
const TodoList = require("./models").TodoList;

const userRouter = require("./routers/usersRouter")

app.use(cors())
app.use(express.json());

function onListen() {
    console.log(`Listening on :${PORT}`);
  }

app.post("/echo", (req, res) => {
    res.json(req.body);
  });

  app.use("/users", userRouter)


  app.get("/todoLists", async (req, res, next) => {
    try {
        const todoLists = await TodoList.findAll();
        if (!todoLists){
            res.status(404).send("No Todolists were found")
        }
        else 
        res.json(todoLists);
      }
    catch (e) {
      next(e);
    }
  });

  app.post("/todoLists", async (req, res, next) => {
    try {
      const userId = parseInt(req.body.userId);
      const user = await User.findByPk(userId);
      if (!user || user === " ") {
        res.status(400).send("User not found, must provide a valid userId");
      } 
      else {
        const todolist = await TodoList.create(req.body);
        res.json(todolist);
      }
    } catch (e) {
      next(e);
    }
  });

  app.get("/todoLists/:listId", async (req, res, next) => {
    try {
        const listId = parseInt(req.params.listId)
        const todoList = await TodoList.findByPk(listId);
        if (!todoList){
            res.status(404).send("No todolist found")
        }
        else 
        res.json(todoList);
      }
    catch (e) {
      next(e);
    }
  });


  app.put("/todoLists/:listId", async (req, res, next) => {
    try {
        const listId = parseInt(req.params.listId)
        const todoListToUpdate = await TodoList.findByPk(listId);
        if (!todoListToUpdate){
            res.status(404).send("No todolist found")
        }
        else { const updatedTodoList = await todoListToUpdate.update(req.body);
            res.json(updatedTodoList);}
          
        } catch (e) {
      next(e);
    }
  });

  






app.listen(PORT, onListen);