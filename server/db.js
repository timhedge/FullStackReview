var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'hackreactorsql',
  database : 'todos'
});
 
connection.connect();

const getAllTasks = (callback) => {
    connection.query('SELECT * FROM tasks', (error, results) => {
        if (error) {
          callback(error, null);
        } else {
          callback(null, results);
        }
    })
}
 
module.exports = {getAllTasks};
