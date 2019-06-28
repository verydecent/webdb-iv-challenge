
exports.up = function(knex) {
  return knex.schema.createTable('recipe_ingredients', (t) => {
    t
      .increments();
    t
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipe')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    t
      .integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredient')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    t
      .float('quantity')
      .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe_ingredients');
};
