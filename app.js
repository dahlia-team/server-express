const express = require('express');
const app = express();
const port = 3000;


app.post('/register', async (req, res, next) => {
  await User.create(req.body);
  res.json({ message: 'register success' })
})

app.get('/todo', async (req, res) => {
  const todos = await Todo.findAll();

  res.json(todos);
})

app.post('/todo', async (req, res) => {
  const todos = await Todo.create(req.body);

  res.status(201).json(todos);
})


app.listen(port, () => console.log(`App running on port ${port}`));
