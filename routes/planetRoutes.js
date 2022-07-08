const express = require('express');
const { createPlanet, getPlanets } = require('../controllers/planetController');
const router = express.Router();

router.post('/', createPlanet);
router.get('/', getPlanets);

module.exports = router;
