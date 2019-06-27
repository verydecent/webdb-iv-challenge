
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe').insert([
        {id: 1, name: 'Bacon Lettuce Tomato', instruction: 'fill1', dish_id: 1},
        {id: 2, name: 'Meat Ball Marinara', instruction: 'fill2', dish_id: 1},
        {id: 3, name: 'Ham and Turkey', instruction: 'fill3', dish_id: 1},
        {id: 4, name: 'Tomato Soup', instruction: 'fill4', dish_id: 2},
        {id: 5, name: 'Chicken Noodle Soup', instruction: 'fill5', dish_id: 2},
        {id: 6, name: 'Pho', instruction: 'fill6', dish_id: 2},
        {id: 7, name: 'Ribeye Steak', instruction: 'fill7', dish_id: 3},
        {id: 8, name: 'Grilled Chicken Breast', instruction: 'fill8',dish_id: 3},
        {id: 9, name: 'Roasted Lamb', instruction: 'fill9', dish_id: 3},
        {id: 10, name: 'Caesar', instruction: 'fill10', dish_id: 4},
        {id: 11, name: 'Spinach Balsamic Vinaigrette', instruction: 'fill11', dish_id: 4},
        {id: 12, name: 'Avocado Nut', instruction: 'fill12', dish_id: 4},
        {id: 13, name: 'Strawberry Banana', instruction: 'fill13', dish_id: 5},
        {id: 14, name: 'Mango Milk', instruction: 'fill14', dish_id: 5},
        {id: 15, name: 'Blueberry Lemon', instruction: 'fill15', dish_id: 5},
      ]);
    });
};
