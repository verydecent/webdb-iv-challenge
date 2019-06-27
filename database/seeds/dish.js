
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('dish').del()
    .then(function () {
      // Inserts seed entries
      return knex('dish').insert([
        {id: 1, name: 'Sandwich'},
        {id: 2, name: 'Soup'},
        {id: 3, name: 'Grilled Meat'},
        {id: 4, name: 'Salad'},
        {id: 5, name: 'Smoothie'},
      ]);
    });
};
