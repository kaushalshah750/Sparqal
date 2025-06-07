const express = require('express');
const router = express.Router();

const contactRoutes = require('./contact.routes');
const portfolioRoutes = require('./portfolio.routes');
const technologyRoutes = require('./technology.routes');
const userRoutes = require('./user.routes');
const authenticate = require('../middleware/auth.middleware')

router.use('/contact', contactRoutes);
router.use('/technology', authenticate, technologyRoutes);
router.use('/portfolio', portfolioRoutes);
router.use('/user', userRoutes);

module.exports = router;