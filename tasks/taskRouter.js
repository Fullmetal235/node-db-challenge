const express = require('express');
const router = express.Router();

const Tasks = require('./taskModel');

router.get('/', (req, res) => {
    Tasks.getTasks()
    .then(task => {
        task.forEach(t => {
          if(t.completed == 1){
            t.completed = true;
          } else if(t.completed == 0) {
            t.completed = false;
          }
        })
        res.status(200).json(task);
      })
          .catch(err => {
            console.log(err);
            res.status(500).json({ Error: "Error getting task." })
          })
      });
router.post('/', (req, res) => {
    Tasks.addTask(req.body)
    .then(task => {
        res.status(200).json(task);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ Error: "Error posting task." })
      })
  });
    
    module.exports = router;