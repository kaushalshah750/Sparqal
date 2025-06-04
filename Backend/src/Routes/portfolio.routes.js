const express = require('express');
const router = express.Router();
const portfolioController = require('../Controller/portfolio.controller');

router.get('/', portfolioController.getPortfolio);

module.exports = router;