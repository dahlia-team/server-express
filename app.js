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

app.delete('/todo/:id', async (req, res) => {
  await Todo.delete({ where: { id: req.params.id } })

  res.json({ message: 'todo deleted' })
})


app.listen(port, () => console.log(`App running on port ${port}`));
