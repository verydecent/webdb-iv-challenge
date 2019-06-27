
exports.up = function(knex) {
  return knex.schema.createTable('recipe', (t) => {
    t.increments();
    t
      .integer('dish_id')
      .notNullable()
      .references('id')
      .inTable('dish');
    t.string('name', 255).notNullable().unique('uq_recipe_name');
    t.string('instruction', 1000);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe');
};
