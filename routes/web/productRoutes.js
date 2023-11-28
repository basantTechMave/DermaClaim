// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const ProductController = require('../../controllers/ProductController');

// router.get('/', ProductController.index);
// router.get('/add', ProductController.add);
// router.get('/edit', ProductController.edit);
// router.get('/view', ProductController.view);
router.get('/assign', ProductController.assign);
router.get('/history', ProductController.history);

module.exports = router;
