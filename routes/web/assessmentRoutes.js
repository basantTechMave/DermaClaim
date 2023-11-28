// routes/assessmentRoutes.js
const express = require('express');
const router = express.Router();
const AssessmentController = require('../../controllers/AssessmentController');

router.get('/', AssessmentController.index);
router.get('/add', AssessmentController.add);
router.get('/edit', AssessmentController.edit);
router.get('/view', AssessmentController.view);

module.exports = router;

