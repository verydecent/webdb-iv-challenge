const express = require('express');
const router = express.Router();

const db = require('../../knex');

router.get('/', (req, res) => {
  db('dish')
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(err => {
      res.status(500).json({ message: `${err}` });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db('dish').where({ id }).first()
  .then(id => {
    res.status(200).json(id);
  })
  .catch(err => {
    res.status(500).json(err);
  });
});

router.post('/', (req, res) => {
  const { name } = req.body;
  const { body } = req;
  if (name) {
    db('dish').insert(body)
      .then(id => {
        db('dish')
        .then(list => {
          list = list.filter(e => e.id < id);
          res.status(200).json({ message: `Dish with ID: ${id} was created`, relatedDishes: list });

        })
        .catch(err => {
          res.status(500).json(err);
        })
      })
      .catch(err => {
        res.status(500).json(err);
      });
  }
  else {
    res.status(500).json({ message: "You are missing a Name for the Dish you want to add!" });
  }
});

module.exports = router;