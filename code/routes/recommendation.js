const express = require('express');
const router = express.Router();
const recommendationController = require('../controllers/recommendationController');

// POST /api/recommendation
router.post('/', recommendationController.getRecommendations);

module.exports = router;
