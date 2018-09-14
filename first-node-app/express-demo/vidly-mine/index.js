const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server running on port ${port}...`));

const genres = [
    { id: 1, genre: 'comedy' },
    { id: 2, genre: 'love' },
    { id: 3, genre: 'romantic' },
    { id: 4, genre: 'terror' }
];

app.get('/api/genres', (req, res) => {
    res.send(genres);
});

app.get('/api/genres/:id', (req, res) => {
    const id = req.params.id;
    const genre = genres.find(g => g.id === parseInt(id));
    if (!genre) return res.status(404).send(`Course not found for given id(${id})`);
    res.send(genre);
});

app.post('/api/genres/', (req, res) => {
    const schema = Joi.object().keys({
        genre: Joi.string().min(3).required()
    });
    const { error } = Joi.validate(req.body, schema);
    if (error) return res.status(40).send(error);
    const genre = {
        id: genres.length + 1,
        genre: req.body.genre
    };
    genres.push(genre);
    res.send(genre)
});