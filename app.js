const express = require('express');
const app = express();
const port = 3000;


app.post('/register', async (req, res, next) => {
  await User.create(req.body);
  res.json({ message: 'register success' })
})


app.listen(port, () => console.log(`App running on port ${port}`));
