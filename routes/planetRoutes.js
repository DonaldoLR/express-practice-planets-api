const express = require('express');
const {
	createPlanet,
	getPlanets,
	getPlanet,
	updatePlanet,
	deletePlanet,
} = require('../controllers/planetController');
const router = express.Router();

router.post('/', createPlanet);
router.get('/', getPlanets);
router.get('/:id', getPlanet);
router.patch('/:id', updatePlanet);
router.delete('/:id', deletePlanet);
module.exports = router;
