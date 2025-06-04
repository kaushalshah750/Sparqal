const router = require('express').Router();
const technologyController = require('../Controller/technology.controller');

router.get('/', technologyController.getTechnologies);
router.post('/', technologyController.addTechnologies);

module.exports = router;