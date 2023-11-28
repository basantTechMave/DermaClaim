// controllers/api/authController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { secret } = require('../../.env');
const { validationResult } = require('express-validator');
const User = require('../../models/model/user');

exports.login = async function (req, res) {
  const { email, password } = req.body;

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).json({
      status: false,
      message: 'Validation error',
      response: errors.mapped(),
    });
  }

  try {
    // Find user by email
    const user = await User.find({ email });

    if (!user || user.length === 0) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user[0].password);

    if (!isMatch) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }

    // Generate JWT token
    const payload = {
      user: {
        id: user[0].id,
      },
    };

    jwt.sign(payload, secret, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.register = async function (req, res) {
  const { username, email, password } = req.body;

  try {
    // Check if user exists
    let user = await User.find({ email });

    if (user && user.length > 0) {
      return res.status(400).json({ msg: 'User already exists' });
    }

    // Create new user
    user = new User({
      username,
      email,
      password,
    });

    // Hash password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // Save user to database
    await user.save();

    // Generate JWT token
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, secret, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.json({ token });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

exports.resetPassword = function (req, res) {
  // Implement password reset logic here
  // Typically involves sending a reset link to the user's email
  res.send('Password reset functionality');
};

// Add other auth-related functions as needed
