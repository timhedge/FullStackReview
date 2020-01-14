const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "todos",
  insecureAuth: true
});

connection.connect(err => {
  if (err) {
    throw err;
  }
  console.log("now connected to the database!");
});

const addTask = (task, callback) => {
  connection.query(
    `INSERT INTO tasks (task) VALUES ("${task}")`,
    (err, data) => {
      if (err) throw err;
      else callback(null, data);
    }
  );
};

const deleteTask = (id, callback) => {
  console.log(id);
  connection.query(`DELETE FROM tasks WHERE id="${id}"`, (err, data) => {
    if (err) throw err;
    else callback(null, data);
  });
};

const getTasks = callback => {
  connection.query("SELECT * FROM tasks", (err, data) => {
    if (err) throw err;
    else callback(null, data);
  });
};

module.exports = { addTask, deleteTask, getTasks };
