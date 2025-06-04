const express = require('express');
const router = express.Router();
const portfolioController = require('../Controller/portfolio.controller');

router.get('/', portfolioController.getPortfolio);
router.post('/', portfolioController.addPortfolio);
router.put('/:id', portfolioController.updatePortfolio);
router.delete('/:id', portfolioController.deletePortfolio);

module.exports = router;