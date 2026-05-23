const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { generateToken } = require('../middleware/auth');
const { authSchema } = require('../validators/schemas');


router.post('/register', async (req, res) => {

  res.status(501).json({ message: 'Register route not implemented yet' });
});


router.post('/login', async (req, res) => {

  res.status(501).json({ message: 'Login route not implemented yet' });
});

module.exports = router;