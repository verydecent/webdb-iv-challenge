const router = require('express').Router();

const Recipe = require('./recipe-model');
const Dish = require('../dish/dish-model');

router.get('/', (req, res) => {

  const message500 = { message: "Unable to get recipes" };

  Recipe.getRecipes()
    .then(recipes => res.status(200).json())
    .catch(error => res.status(500).json(message500));
  // db('recipe')
  //   .then(list => {
  //     res.status(200).json(list);
  //   })
  //   .catch(err => {
  //     res.status(500).json(err);
  //   });
});

router.post('/', (req, res) => {

  const { name, dish_id, instruction } = req.body;
  const message400 = { error: "Please provide recipe_name, dish_id and instructions for the recipe" }
    const message500 = { error: "There was an error while saving the recipe to the database" };
  if (!name || !dish_id || !instruction) {
    res.status(400).json(message400);
  }
  else {
    Recipe.addRecipe(req.body)
      .then(recipe => res.status(201).json(recipe))
      .catch(error => res.status(500).json(message500));
  }
  // const { name } = req.body;
  // const { dish_id } = req.body;
  // const { instruction } = req.body;
  // const { body } = req;
  // if (!name || !dish_id || !instruction) {
  //   res.status(500).json({ message: "You are missing the fields in your request! Please provide one if you wish to post" });
  // }
  // else {
  //   db('recipe').insert(body)
  //     .then(id => {
  //       res.status(200).json({ message: `Recipe with id: ${id} successfully posted`});
  //     })
  //     .catch(err => {
  //       res.status(500).json(err);
  //     });
  // }
});


// Returns Dish, Recipe name, and list of required ingredients
router.get('/:id', (req, res) => {
  const message404 = { error: "The recipe with the specified ID does not exist." };
  const message500 = { error: "The recipe information could not be retrieved." };

  Recipe
    .getRecipe(req.params.id)
    .then(recipe => {
      Dish.getDishes()
        .then(dishes => {
          const { name } = dishes.filter(dish => dish.id == recipe.dish_id)[0];
          name
            ? res.status(200).json({...recipe, name })
            : recipe.status(404).json(message404);
        })
        .catch(error => res.status(500).json({ message: "Unable to get dishes" }));
    })
    .catch(error => res.status(500).json(message500));
  // const { id } = req.params;

  // db('recipe').where({ id }).first()
  //   .then(recipe => {
  //     const dishForeignKey = recipe.id;
  //     console.log(recipe);
  //     db('dish').where({ id: dishForeignKey })
  //       .then(dish => {
  //         // Now we've got access to recipe and dish

  //         console.log(dish);
  //         console.log(recipe);
  //       })
  //   })
});

module.exports = router;