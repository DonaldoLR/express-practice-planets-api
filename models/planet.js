const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planetSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		orbital_period: {
			type: Number,
			required: true,
		},
		radius_in_miles: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Planet', planetSchema);
