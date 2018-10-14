const mongoose = require('mongoose');
const debug = require('debug')('mongo');

mongoose.connect('mongodb://127.0.0.1/playground')
    .then(() => debug('connected to mongoDB ...'))
    .catch(err => debug('Cannot connecto to mongoDB...', new Error(err)));