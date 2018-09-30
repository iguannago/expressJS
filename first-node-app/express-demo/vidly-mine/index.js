const express = require('express');
const app = express();
const Joi = require('joi');
const genres = require('./routes/genres');

app.use(express.json());
app.use('/api/genres', genres);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server running on port ${port}...`));