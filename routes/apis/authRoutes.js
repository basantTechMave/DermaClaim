// routes/api/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../../controllers/apis/authController');

router.post('/login', authController.login);
router.post('/register', authController.register);
router.post('/reset-password', authController.resetPassword);

// Add other auth-related routes as needed

module.exports = router;
