const express = require("express");
const app = express();

app.use(express.json());

let tasks = [];

app.get("/task", (req, res) => {
  res.status(200).send(tasks);
});

app.post("/task", (req, res) => {
  tasks.push(req.body);
  res.status(201).send("created");
});

app.put("/task/:id", (req, res) => {
  tasks.find(task => {
    if (req.params.id == task.id) {
      if (req.body.completed) {
        task.completed = req.body.completed;
      }
      if (req.body.description) {
        task.description = req.body.description;
      }
    }
  });
  res.status(200).send("Updated");
});

app.delete("/task/:id", (req, res) => {
  for (let i = 0; i < tasks.length; i++) {
    if (req.params.id == tasks[i].id) {
      tasks.splice(i, 1);
      res.status(200).send("deleted");
      break;
    }
  }
});

app.listen(3000, () => {
  console.log("Server has started!");
});
