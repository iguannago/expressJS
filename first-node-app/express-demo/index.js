const Joi = require('joi');
const express = require('express');
const logger = require('./logger.js');
const authentication = require('./authentication.js');
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);
app.use(authentication);

app.get('/', (req, res) => {
    res.send('Hello World!!!!');
});

const courses = [{
        id: 1,
        name: 'course1'
    },
    {
        id: 2,
        name: 'course2'
    },
    {
        id: 3,
        name: 'course3'
    }
];

app.get('/api/courses', (req, res) => {
    res.send(courses);
});


app.get('/api/courses/:id', (req, res) => {
    const course = findCourseById(req.params.id);
    if (!course) return res.status(404).send(`The course with the given ID(${req.params.id}) is not found`);
    res.send(course);
});

app.get('/api/post/:year/:month', (req, res) => {
    res.send(req.query);
});

app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(validationResult.error.details[0].message);
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    const course = findCourseById(req.params.id);
    if (!course) return res.status(404).send(`The course with the given ID(${req.params.id}) is not found`);
    const { error } = validateCourse(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    const course = findCourseById(req.params.id);
    if (!course) return res.status(404).send(`The course with the given ID(${req.params.id}) is not found`);
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    res.send(course);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}..`));

function findCourseById(id) {
    return courses.find(c => c.id === parseInt(id));
}

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}