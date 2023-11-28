// routes/api/userRoutes.js
const express = require('express');
const router = express.Router();
const authMiddleware = require('../../middleware/authMiddleware');
const userController = require('../../controllers/apis/userController');

router.use(authMiddleware); // Apply authentication middleware to all routes

router.get('/profile', userController.getUserProfile);
router.put('/profile', userController.updateUserProfile);

// Add other user-related routes as needed

module.exports = router;
