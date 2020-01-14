const express = require("express");
const cors = require("cors");
const path = require("path");
const db = require("./db.js");

const app = express();

app.use(express.static(path.join(__dirname, "../dist")));
app.use(cors());
app.use(express.json());

app.get("/todo", (req, res) => {
  // TODO: add in database function to get array of all todos and res.send the results
  db.getTasks((err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  });
});

app.post("/todo", (req, res) => {
  // TODO: add in database function to add single to do to the table
  const task = req.body.task;
  console.log(task);
  db.addTask(task, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  });
});

app.delete("/todo/:id", (req, res) => {
  // TODO: add in database function to remove a single to do item from the table
  const id = req.params.id;
  console.log("id from server", id);
  db.deleteTask(id, (err, data) => {
    if (err) {
      console.error(err);
    } else {
      res.send(data);
    }
  });
});

app.listen(3000, () => {
  console.log("I'm now listening on port 3000!");
});
