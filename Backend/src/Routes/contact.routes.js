const express = require('express');
const router = express.Router();
const contactController = require('../Controller/contact.controller');

router.post('/', contactController.submitContactForm);

module.exports = router;