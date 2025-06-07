const express = require('express');
const router = express.Router();
const contactController = require('../Controller/contact.controller');
const authenticate = require('../middleware/auth.middleware')

router.post('/', contactController.submitContactForm);
router.get('/', authenticate, contactController.fetchContactLeads);

module.exports = router;