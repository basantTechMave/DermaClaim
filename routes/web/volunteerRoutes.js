// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const volunteerController = require('../../controllers/volunteerController');

router.get('/', volunteerController.index);
router.get('/add', volunteerController.add);
router.get('/edit', volunteerController.edit);
router.get('/view', volunteerController.view);

module.exports = router;

