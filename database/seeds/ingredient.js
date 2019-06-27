
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredient').insert([
        {id: 1, name: 'Bread'},
        {id: 2, name: 'Tomato'},
        {id: 3, name: 'Bacon'},
        {id: 4, name: 'Beef'},
        {id: 5, name: 'Turkey'},
        {id: 6, name: 'Ham'},
        {id: 7, name: 'Water'},
        {id: 8, name: 'Cream'},
        {id: 9, name: 'Spaghetti Noodles'},
        {id: 10, name: 'Chicken Stock'},
        {id: 11, name: 'Salt'},
        {id: 12, name: 'Cinnamon'},
        {id: 13, name: 'Beef Bone'},
        {id: 14, name: 'Brisket'},
        {id: 15, name: 'rowValue3'},
        {id: 16, name: 'Ribeye Cut'},
        {id: 17, name: 'Chicken Breast'},
        {id: 18, name: 'Lamb Ribs'},
        {id: 19, name: 'Garlic'},
        {id: 20, name: 'Lettuce'},
        {id: 21, name: 'Spring Mix'},
        {id: 22, name: 'Baby Spinach'},
        {id: 23, name: 'Avocado'},
        {id: 24, name: 'Walnuts'},
        {id: 25, name: 'Olive Oil'},
        {id: 26, name: 'Balsamic Vinaigrette'},
        {id: 27, name: 'Caesar Dressing'},
        {id: 28, name: 'Strawberry'},
        {id: 29, name: 'Milk'},
        {id: 30, name: 'Mango'},
        {id: 31, name: 'Blueberry'},
        {id: 32, name: 'Lemon'},
      ]);
    });
};
