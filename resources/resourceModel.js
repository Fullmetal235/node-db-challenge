const db = require('../data/dbConfig');

module.exports = {
    getResources: function () {
        return db('resources')
    },
    addResource: function (resource) {
        return db('resources')
            .insert(resource)
            .then(([id]) => this.getResources([id]))
    }
}