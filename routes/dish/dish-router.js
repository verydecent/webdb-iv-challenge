const router = require('express').Router();
const Dish = require('./dish-model');

router.get('/', (req, res) => {

  const message500 = { message: "Unable to get dishes" };
  
  Dish.getDishes()
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(error => {
      res.status(500).json(message500);
    });
  // db('dish')
  //   .then(dishes => {
  //     res.status(200).json(dishes);
  //   })
  //   .catch(err => {
  //     res.status(500).json({ message: `${err}` });
  //   });
});

router.get('/:id', (req, res) => {
  const message404 = { error: "The dish with the specified ID does not exist"};
  const message500 = { error: "The dish information could not be retrieved." };
  const { id } = req.params;

  Dish
    .getDish(id)
    .then(dish => {
      dish
        ? res.status(200).json(dish)
        : res.status(404).json(message404);
    })
    .catch(error => {
      res.status(500).json(message500);
    });
  // const { id } = req.params;
  // db('dish').where({ id }).first()
  // .then(id => {
  //   res.status(200).json(id);
  // })
  // .catch(err => {
  //   res.status(500).json(err);
  // });
});

router.post('/', (req, res) => {
  const { name } = req.body;
  const dish = req.body;
  const message400 = { error: "Please provide dish_name for the dish" }
  const message500 = { error: "There was an error while saving the dish to the database" };

  if (name) {
    Dish.addDish(dish)
      .then(dish => res.status(200).json(dish))
      .catch(error =>  res.status(500).json(message500));
  }
  else {
    res.status(400).json(message400);
  }
  // const { name } = req.body;
  // const { body } = req;
  // if (name) {
  //   db('dish').insert(body)
  //     .then(id => {
  //       db('dish')
  //       .then(list => {
  //         list = list.filter(e => e.id < id);
  //         res.status(200).json({ message: `Dish with ID: ${id} was created`, relatedDishes: list });

  //       })
  //       .catch(err => {
  //         res.status(500).json(err);
  //       })
  //     })
  //     .catch(err => {
  //       res.status(500).json(err);
  //     });
  // }
  // else {
  //   res.status(500).json({ message: "You are missing a Name for the Dish you want to add!" });
  // }
});

module.exports = router;