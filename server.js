const express = require('express');

const server = express();
server.use(express.json());

//route handlers
const projectsRouter = require('./projects/projectRouter.js');
const resourcesRouter = require('./resources/resourceRouter.js');
const tasksRouter = require('./tasks/taskRouter.js');

//routers
server.use('/api/projects', projectsRouter);
server.use('/api/resources', resourcesRouter);
server.use('/api/tasks', tasksRouter);

module.exports = server;