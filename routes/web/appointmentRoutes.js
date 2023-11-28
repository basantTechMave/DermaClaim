// routes/assessmentRoutes.js
const express = require('express');
const router = express.Router();
const AppointmentController = require('../../controllers/AppointmentController');

router.get('/', AppointmentController.index);
router.get('/agenda', AppointmentController.agenda);
router.get('/upcoming', AppointmentController.upcoming);

module.exports = router;