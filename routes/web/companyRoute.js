// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const CompanyController = require('../../controllers/CompanyController');

router.get('/', CompanyController.index);
router.get('/add', CompanyController.add);
router.get('/edit', CompanyController.edit);
router.get('/view', CompanyController.view);

module.exports = router;
