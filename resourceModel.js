const db = require('../data/dbConfig.js');

module.exports = {
    getResources: function () {
        return db('resources')
    },
    addResource: function (resource) {
        return db('resource')
            .insert(resource)
            .then(([id]) => this.getResources([id]))
    }
}