
exports.up = function(knex) {
  return knex.schema.createTable('recipe', (t) => {
    t
      .increments();
    t
      .string('name', 255)
      .notNullable()
      .unique();
    t
      .integer('dish_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('dish')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
    t
      .string('instruction', 1000)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('recipe');
};
