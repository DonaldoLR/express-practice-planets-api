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
const getPlanet = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Planet ID is not valid' });
	}

	const singlePlanet = await Planet.findById(id);

	if (!singlePlanet) {
		return res.status(500).json({ error: 'Unable to find Planet' });
	}

	res.status(200).json(singlePlanet);
};
// UPDATE
const updatePlanet = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Planet ID is not valid' });
	}

	const updatedPlanet = await Planet.findByIdAndUpdate(id, { ...req.body });

	if (!updatedPlanet) {
		return res.status(500).json({ error: 'Unable to update planet' });
	}

	res.status(200).json({ message: 'Planet updated', updatedPlanet });
};
// DELETE
const deletePlanet = async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).json({ error: 'Planet ID is not valid' });
	}

	const deletedPlanet = await Planet.findByIdAndDelete(id);

	if (!deletedPlanet) {
		return res.status(500).json({ error: 'Unable to delete planet' });
	}

	res.status(200).json({ message: 'Planet deleted', deletedPlanet });
};

module.exports = {
	createPlanet,
	getPlanets,
	getPlanet,
	updatePlanet,
	deletePlanet,
};
