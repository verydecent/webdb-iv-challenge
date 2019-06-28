const express = require('express');
const router = express.Router();

const db = require('../../knex');

router.get('/', (req, res) => {
  db('recipe')
    .then(list => {
      res.status(200).json(list);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
  const { name } = req.body;
  const { dish_id } = req.body;
  const { instruction } = req.body;
  const { body } = req;
  if (!name || !dish_id || !instruction) {
    res.status(500).json({ message: "You are missing the fields in your request! Please provide one if you wish to post" });
  }
  else {
    db('recipe').insert(body)
      .then(id => {
        res.status(200).json({ message: `Recipe with id: ${id} successfully posted`});
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
});


// Returns Dish, Recipe name, and list of required ingredients
router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('recipe').where({ id }).first()
    .then(recipe => {
      const dishForeignKey = recipe.id;
      console.log(recipe);
      db('dish').where({ id: dishForeignKey })
        .then(dish => {
          // Now we've got access to recipe and dish

          console.log(dish);
          console.log(recipe);
        })
    })
});

module.exports = router;