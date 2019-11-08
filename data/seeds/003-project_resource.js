
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects_resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects_resources').insert([
        {id: 1, projectID: 1, resourceID: 1},
        {id: 2, projectID: 1, resourceID: 2},
        {id: 3, projectID: 2, resourceID: 3},
        {id: 4, projectID: 3, resourceID: 4},
        {id: 5, projectID: 3, resourceID: 5}
      ]);
    });
};