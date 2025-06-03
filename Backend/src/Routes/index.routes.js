const express = require('express');
const router = express.Router();

const contactRoutes = require('./contact.routes');

router.use('/contact', contactRoutes);

module.exports = router;