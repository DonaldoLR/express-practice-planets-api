require('dotenv').config();
const mongoose = require('mongoose');
const Planet = require('./models/planet');

mongoose
	.connect(process.env.MONGO_URI, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log('MONGO CONNECTION OPEN');
	})
	.catch((err) => console.log(err));

const seedPlanets = [
	{
		name: 'Mercury',
		orbital_period: 88,
		radius_in_miles: 1516,
	},
	{
		name: 'Venus',
		orbital_period: 225,
		radius_in_miles: 3760.4,
	},
	{
		name: 'Earth',
		orbital_period: 365,
		radius_in_miles: 3958.8,
	},
	{
		name: 'Mars',
		orbital_period: 687,
		radius_in_miles: 2106.1,
	},
	{
		name: 'Jupiter',
		orbital_period: 4380,
		radius_in_miles: 43441,
	},
	{
		name: 'Saturn',
		orbital_period: 10585,
		radius_in_miles: 36184,
	},
	{
		name: 'Uranus',
		orbital_period: 30660,
		radius_in_miles: 15759,
	},
	{
		name: 'Neptune',
		orbital_period: 60225,
		radius_in_miles: 15299,
	},
];

const seedDB = async () => {
	await Planet.deleteMany({});
	await Planet.insertMany(seedPlanets);
};

seedDB().then(() => {
	mongoose.connection.close();
});
