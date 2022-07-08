require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const planetRoutes = require('./routes/planetRoutes');

const app = express();

app.use(express.json());
app.use((req, res, next) => {
	console.log(req.path, req.method);
	next();
});

app.use('/api/planets', planetRoutes);

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		app.listen(process.env.PORT, () => {
			console.log('Connected to DB & listening...');
		});
	})
	.catch((error) => console.log(error));
