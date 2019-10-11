exports.up = function(knex) {
    return knex.schema.createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name', 255)
        .notNullable();
      tbl.string('description', 1000);
      tbl.bool('completed');
    })
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('name', 255)
        .notNullable()
        .unique();
      tbl.string('description', 1000);
    })

    .createTable('projects_resources', tbl => {
      tbl.increments();
      tbl.integer('projectID')
        .unsigned()
        .notNullable()
        .references("id").inTable('projects');
      tbl.integer('resourceID')
        .unsigned()
        .notNullable()
        .references("id").inTable('resources')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })

    .createTable('tasks', tbl => {
      tbl.increments();
      tbl.string('description', 1000)
        .notNullable();

      tbl.string('notes', 1000);

      tbl.integer('projectID')
        .unsigned()
        .notNullable()
        .references("id").inTable('projects')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');

      tbl.bool('completed');
    })
  };
  
  exports.down = function(knex) {
     return knex.schema.dropTableIfExists('projects_resources')
        .dropTableIfExists('tasks')
        .dropTableIfExists('resources')
        .dropTableIfExists('projects')
  };