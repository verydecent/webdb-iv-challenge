
exports.up = function(knex) {
  return knex.schema.createTable('recipe_ingredients', (t) => {
    t
      .integer('recipe_id')
      .notNullable()
      .references('id')
      .inTable('recipe');
    t
      .integer('ingredient_id')
      .notNullable()
      .references('id')
      .inTable('ingredient');
    t.integer('ingredient_quantity').notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_ingredients');
};
