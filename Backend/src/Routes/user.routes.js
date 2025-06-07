const express = require('express');
const router = express.Router();
const userController = require('../Controller/user.controller');
const authenticate = require('../middleware/auth.middleware')

// router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/current', authenticate, userController.currentUser);

module.exports = router;