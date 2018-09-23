const Joi = require('joi');
const courses = require('./routes/courses');
const express = require('express');
const logger = require('./logger.js');
const authentication = require('./authentication.js');
const helmet = require('helmet');
const morgan = require('morgan');
const config = require('config');
const appStartupDebugger = require('debug')('app:startup');
const appDbDebugger = require('debug')('app:db');
const app = express();

if (app.get('env') === 'development') {
    app.use(logger);
    app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));
    appStartupDebugger('Morgan enabled...');
    appDbDebugger('Connected to DB...')
}

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/courses', courses);

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
console.log(`app.get: ${app.get('env')}`); //if NODE_EN is not defined falls back to development
app.use(express.static('public'));

app.use(authentication);
app.use(helmet());

console.log(`Application name: ${config.get('name')}`);
console.log(`Mail server: ${config.get('mail.host')}`);
console.log(`App password: ${config.get('mail.password')}`);

app.get('/', (req, res) => {
    res.render('index', { title: 'Express App', message: 'hello, world!!!' });
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}..`));