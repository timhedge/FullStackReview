const db = require('./db.js');
const cors = require('cors');
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('./dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/tasks', (req, res) => {
    //console.log(req)
   db.getAllTasks((err, data) => {
       if (err) {
           console.log(err);
       } else {
           //console.log(data)
           res.send(data);
       }
   })
});

app.post('/addTask', (req, res) => {
    // call db query
      // if err
        // log err
      // else
        // res.send data
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
