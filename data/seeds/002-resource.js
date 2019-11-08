
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {id: 1, name: 'Steel beams', description: 'For spanning the bridge.'},
        {id: 2, name: 'Concrete', description: 'For building road on bridge.'},
        {id: 3, name: 'Traffic signals', description: 'To direct traffic.'},
        {id: 4, name: 'Jet Fuel', description: 'To melt the steel beams.'},
        {id: 5, name: 'Explosives', description: 'To blow up the bridge.'}
      ]);
    });
};