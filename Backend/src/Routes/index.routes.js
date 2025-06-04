const express = require('express');
const router = express.Router();

const contactRoutes = require('./contact.routes');
const portfolioRoutes = require('./portfolio.routes');
const technologyRoutes = require('./technology.routes');

router.use('/contact', contactRoutes);
router.use('/technology', technologyRoutes);
router.use('/portfolio', portfolioRoutes);

module.exports = router;