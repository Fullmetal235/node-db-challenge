const express = require('express');
const router = express.Router();

const Projects = require('./projectModel');

router.get('/', (req, res) =>{
    Projects.getProjects()
    .then(project => {
      project.forEach(proj => {
        if(proj.complete == 1){
          proj.complete = true;
        } else if(proj.complete == 0) {
          proj.complete = false;
        }
      })
      res.status(200).json(project);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({Error: "Error getting projects."})
    })
  });
  
router.post('/',  (req, res) => {
    Projects.addProject(req.body)
    .then(project =>{
        res.status(200).json(project);
    })
    .catch(err => {
        res
          .status(500)
          .json({
            message: `Error occurred while posting project.`,
            err: err,
})

})

});

module.exports = router;