
exports.up = function(knex) {
  return knex.schema
  .createTable("Projects", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable().index();
      tbl.string("description");
      tbl.boolean("completed").notNullable().defaultTo("false");
  })
  .createTable("Resources", (tbl) => {
      tbl.increments();
      tbl.string("name").notNullable().unique().index();
      tbl.string("description");
  })
  .createTable("Tasks", (tbl) => {
      tbl.increments();
      tbl.string("description").notNullable();
      tbl.string("notes");
      tbl.boolean("completed").notNullable().defaultTo("false");
      tbl.integer("project_id").unsigned().references("Projects.id").onDelete("RESTRICT").onUpdate("CASCADE")
  })
  .createTable("ProjectResources", (tbl) => {
      tbl.increments();
      tbl.integer("project_id").unsigned().references("Projects.id").onDelete("RESTRICT").onUpdate("CASCADE");
      tbl.integer("resource_id").unsigned().references("Resources.id").onDelete("RESTRICT").onUpdate("CASCADE")
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("ProjectResources")
    .dropTableIfExists("Tasks")
    .dropTableIfExists("Resources")
    .dropTableIfExists("Projects")
};
