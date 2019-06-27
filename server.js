const express = require('express');
const server = express();

const dishRoutes = require('./routes/dish/dish');

server.use(express.json());

server.use('/api/dish', dishRoutes);

const port = process.env.PORT || 5000;

server.get('/', (req, res) => {
  res.status(200).json({ message: "Sanity check" });
});

server.listen(port, () => console.log(` === Server live on Port ${port} === `));