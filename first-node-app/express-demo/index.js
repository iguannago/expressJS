const Joi = require('joi');
const express = require('express');
const app = express();

app.use(express.json());

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
    if (!course) noCourseFoundErrorHandler(res, req.params.id);
    res.send(course);
});

app.get('/api/post/:year/:month', (req, res) => {
    res.send(req.query);
});

app.post('/api/courses', (req, res) => {
    const { error } = validateCourse(req.body);
    if (error) {
        res.status(400).send(validationResult.error.details[0].message);
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

app.put('/api/courses/:id', (req, res) => {
    const course = findCourseById(req.params.id);
    if (!course) noCourseFoundErrorHandler(res, req.params.id);
    const { error } = validateCourse(req.body);
    if (error) {
        res.status(400).send(error.details[0].message);
        return;
    }
    course.name = req.body.name;
    res.send(course);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}..`));

function noCourseFoundErrorHandler(res, courseId) {
    res.status(404).send(`The course with the given ID(${courseId}) is not found`);
}

function findCourseById(id) {
    return courses.find(c => c.id === parseInt(id));
}

function validateCourse(course) {
    const schema = {
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}