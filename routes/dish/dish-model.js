const db = require('../../knex');

module.exports = {
  getDishes,
  getDish,
  addDish,
};

function getDishes() {
  return db('dish');
}

function getDish(id) {
  return db('dish')
    .where({ id }).first();
}

function addDish(dish) {
  return db('dish')
    .insert(dish).then(ids => ({ id: ids[0] }));
}