const express = require('express');
const app = express();
const Joi = require('joi');

app.use(express.json());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server running on port ${port}...`));

const genres = [
    { id: 1, name: 'comedy' },
    { id: 2, name: 'love' },
    { id: 3, name: 'romantic' },
    { id: 4, name: 'terror' }
];

app.get('/api/genres', (req, res) => {
    res.send(genres);
});

app.get('/api/genres/:id', (req, res) => {
    const id = req.params.id;
    const genre = findCourseByid(id);
    return404IfCourseNotFound(genre, id, res);
    res.send(genre);
});

app.post('/api/genres/', (req, res) => {
    const { error } = validateBody(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };
    genres.push(genre);
    res.send(genre)
});

app.put('/api/genres/:id', (req, res) => {
    const id = req.params.id;
    const genre = findCourseByid(id);
    return404IfCourseNotFound(genre, id, res);
    const { error } = validateBody(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    genre.name = req.body.name;
    res.send(genre)
});

function validateBody(body) {
    const schema = Joi.object().keys({
        name: Joi.string().min(3).required()
    });
    return Joi.validate(body, schema);
}

function findCourseByid(id) {
    return genres.find(g => g.id === parseInt(id));
}

function return404IfCourseNotFound(genre, id, res) {
    if (!genre) return res.status(404).send(`Course not found for given id(${id})`);
}