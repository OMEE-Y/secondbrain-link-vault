const express = require('express');
const bcrypt = require('bcryptjs');

const router = express.Router();

const User = require('../models/User');
const { generateToken } = require('../middleware/auth');
const { authSchema } = require('../validators/schemas');

router.post('/register', async (req, res) => {
  try {
    const validation = authSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        message: validation.error.issues[0].message,
        errors: validation.error.issues
      });
    }

    const { username, password } = validation.data;

    const existingUser = await User.findOne({
      username: username.toLowerCase()
    });

    if (existingUser) {
      return res.status(409).json({
        message: 'Username already exists'
      });
    }

    const user = await User.create({
      username,
      password
    });

    const token = generateToken(user._id);

    res.status(201).json({
      token,
      user: {
        id: user._id,
        username: user.username
      }
    });

  } catch (err) {
    console.error('Register error:', err);

    res.status(500).json({
      message: 'Failed to register user'
    });
  }
});

router.post('/login', async (req, res) => {
  try {
    const validation = authSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        message: validation.error.issues[0].message,
        errors: validation.error.issues
      });
    }

    const { username, password } = validation.data;

    const user = await User.findOne({
      username: username.toLowerCase()
    });

    if (!user) {
      return res.status(401).json({
        message: 'Invalid credentials'
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: 'Invalid credentials'
      });
    }

    const token = generateToken(user._id);

    res.json({
      token,
      user: {
        id: user._id,
        username: user.username
      }
    });

  } catch (err) {
    console.error('Login error:', err);

    res.status(500).json({
      message: 'Failed to login'
    });
  }
});

module.exports = router;