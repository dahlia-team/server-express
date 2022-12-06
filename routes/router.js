const router = require('express').Router();

router.post('/login', async (req, res, next) => {
  // pengecekan akun
  
  const user = User.find({ where: {email: req.body.email} });

  res.json({ access_token: 'lalaa' });
})