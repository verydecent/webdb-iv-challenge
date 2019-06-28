const db = require('../../knex');

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe,
}

function getRecipes() {
  return db('recipe');
}

function getRecipe(id) {
  return db('recipe').where({ id }).first();
}

function addRecipe(recipe) {
  return db('recipe').insert(recipe).then(ids => ({ id: ids[0] }));
}