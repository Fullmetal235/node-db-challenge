
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {id: 1, description: 'Build skeleton of bridge', notes: 'Steel beam framing', projectID: 1, completed: true},
        {id: 2, description: 'Construct roadway', notes: 'Concrete driving surface', projectID: 1, completed: true},
        {id: 3, description: 'Paint lines', notes: '', projectID: 1, completed: true},
        {id: 4, description: 'Install traffic lights', notes: '', projectID: 2, completed: true},
        {id: 5, description: 'Advertise new bridge', notes: 'News reports, radio, cafe posters', projectID: 2, completed: true},
        {id: 6, description: 'Plant explosives under roadway', notes: 'Target roadway, steel beams to strong', projectID: 3, completed: true},
        {id: 7, description: 'Place jet fuel tanks on steel beam structure', notes: 'This must light first.', projectID: 3, completed: true},
        {id: 8, description: 'DETONATE!!!!!!', notes: 'Play Sweet Victory as you hit button.', projectID: 3, completed: false},
      ]);
    });
};