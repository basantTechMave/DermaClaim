// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/UserController');

router.get('/login', UserController.login);
router.get('/register', UserController.register);
router.get('/reset', UserController.reset);
router.get('/', UserController.index);

module.exports = router;
