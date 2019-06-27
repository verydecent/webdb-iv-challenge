const express = require('express');
const server = express();

server.use(express.json());

const port = process.env.PORT || 5000;

server.get('/', (req, res) => {
  res.status(200).json({ message: "Sanity check" });
});

server.listen(port, () => console.log(` === Server live on Port ${port} === `));