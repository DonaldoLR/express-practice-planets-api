const express = require('express');
const { createPlanet } = require('../controllers/planetController');
const router = express.Router();

router.post('/', createPlanet);

module.exports = router;
