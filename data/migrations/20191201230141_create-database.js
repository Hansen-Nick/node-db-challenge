
exports.up = function(knex) {
  return (knex.schema
    .createTable('projects', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.string('description');
      tbl.boolean('completed').defaultTo(false)
    })
    
    .createTable('resources', tbl => {
      tbl.increments();
      tbl.string('name').notNullable();
      tbl.string('description')
    })

    .createTable('project-resource', tbl => {
      tbl.integer('project_id').unsigned().notNullable().references('projects.id');
      tbl.integer('resource_id').unsigned().notNullable().references('resource.id');
      tbl.primary(['project_id', 'resource_id'])
    })

    .createTable('task', tbl => {
      tbl.increments();
      tbl.string('description').notNullable();
      tbl.string('notes')
      tbl.integer('project_id').unsigned().notNullable().references('projects.id')
      tbl.boolean('completed').defaultTo(false)
    })
  )};

exports.down = function(knex) {
  return (
    knex.schema
      .dropTableIfExists('task')
      .dropTableIfExists('project-resource')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
)};
