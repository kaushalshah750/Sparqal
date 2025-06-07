const express = require('express');
const router = express.Router();
const portfolioController = require('../Controller/portfolio.controller');
const authenticate = require('../middleware/auth.middleware')

router.get('/', portfolioController.getPortfolio);
router.post('/', authenticate, portfolioController.addPortfolio);
router.put('/:id', authenticate, portfolioController.updatePortfolio);
router.delete('/:id', authenticate, portfolioController.deletePortfolio);

module.exports = router;