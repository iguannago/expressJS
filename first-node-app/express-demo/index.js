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
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send(`The course with the given ID(${req.params.id}) is not found`);
    res.send(course);

});

app.get('/api/post/:year/:month', (req, res) => {
    res.send(req.query);
});

app.post('/api/courses', (req, res) => {
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}..`));