const db = require('../data/dbConfig');

module.exports = {
    getProjects: function () {
        return db('resources')
    },
    addProject: function (resource) {
        return db('resources')
            .insert(resource)
            .then(([id]) => this.getProjects([id]))
    }
}