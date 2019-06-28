
exports.up = function(knex) {
  return knex.schema.createTable('dish', (t) => {
    t
      .increments();
    t
      .string('name', 255)
      .notNullable()
      .unique();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('dish');
};
