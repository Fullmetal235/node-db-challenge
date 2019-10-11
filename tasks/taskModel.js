const db = require('../data/dbConfig.js');

module.exports = {
    getTasks: function () {
        return db('tasks')
        .join('projects', 'tasks.projectID', '=', 'projects.id')
        .select('tasks.id', 'tasks.desc', 'tasks.notes', 'tasks.completed', 'projects.name', 'projects.description')
    },
    addTask: function (task) {
        return db('tasks')
            .insert(task)
            .then(([id]) => this.getTasks([id]))
    }
}