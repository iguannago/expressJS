const express = require('express');
const router = express.Router();

const genres = [
    { id: 1, name: 'comedy' },
    { id: 2, name: 'love' },
    { id: 3, name: 'romantic' },
    { id: 4, name: 'terror' }
];

router.get('/', (req, res) => {
    res.send(genres);
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    const genre = findCourseByid(id);
    return404IfCourseNotFound(genre, id, res);
    res.send(genre);
});

router.post('/', (req, res) => {
    const { error } = validateBody(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const genre = {
        id: genres.length + 1,
        name: req.body.name
    };
    genres.push(genre);
    res.send(genre)
});

router.put('/:id', (req, res) => {
    const id = req.params.id;
    const genre = findCourseByid(id);
    return404IfCourseNotFound(genre, id, res);
    const { error } = validateBody(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    genre.name = req.body.name;
    res.send(genre)
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    const genre = findCourseByid(id);
    return404IfCourseNotFound(genre, id, res);
    const index = genres.indexOf(genre);
    genres.splice(index, 1);
    res.send(genre);
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

module.exports = router;