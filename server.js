const express = require('express');
const server = express();
const helmet = require('helmet');

const dishRoutes = require('./routes/dish/dish');
const recipeRoutes = require('./routes/recipe/recipe');

server.use(express.json());
server.use(helmet());

// Do what we know how to do first

// Joins.... -_-
// Create helper Functions to make more modular keeping code DRY
// Convert to Async Await
// Add Middleware

server.use('/api/dish', dishRoutes);
server.use('/api/recipe', recipeRoutes);

const port = process.env.PORT || 5000;

server.get('/', (req, res) => {
  res.status(200).json({ message: "Sanity check" });
});

server.listen(port, () => console.log(` === Server live on Port ${port} === `));