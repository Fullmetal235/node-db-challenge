const express = require('express');
const router = express.Router();

const Projects = require('./projectsModel');

router.get('/', (req, res) =>{
    Projects.getProjects()
    .then(project =>{
        res.status(200).json(project);
    })
    .catch(err => {
        res
          .status(500)
          .json({
            message: `Error occurred while getting projects.`,
            err: err,
})

})

});
router.post('/',  (req, res) => {
    Projects.addProject()
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