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

module.exports = router;