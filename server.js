require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const planetRoutes = require('./routes/planetRoutes');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
	console.log(req.path, req.menthod);
	next();
});

app.use('/', (req, res) => {
	res.status(200).json({ message: 'Connected' });
});

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log('Connected to DB & listening...');
		});
	})
	.catch((error) => console.log(error));
