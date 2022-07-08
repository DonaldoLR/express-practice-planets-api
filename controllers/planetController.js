const Planet = require('../models/planet');
const mongoose = require('mongoose');

// CREATE
const createPlanet = async (req, res) => {
	const { name, orbital_period, radius_in_miles } = req.body;
	const newPlanet = await Planet.create({
		name,
		orbital_period,
		radius_in_miles,
	});

	if (!newPlanet) {
		return res.status(500).json({ error: 'Unable to create a new planet' });
	}

	res.status(200).json({ message: 'Planet created', newPlanet });
};
// GET ALL
const getPlanets = async (req, res) => {
	const planets = await Planet.find({}).sort({ createdAt: -1 });

	if (!planets) {
		return res.status(500).json({ error: 'Unable to get planets' });
	}

	res.status(200).json(planets);
};
// GET SINGLE

// UPDATE

// DELETE

module.exports = {
	createPlanet,
	getPlanets,
};
