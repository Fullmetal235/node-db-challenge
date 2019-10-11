const db = require('../data/dbConfig');

module.exports = {
    getProjects: function () {
        return db('projects')
    },
    addProject: function (project) {
        return db('projects')
            .insert(project)
            .then(([id]) => this.getProjects([id]))
    }
}