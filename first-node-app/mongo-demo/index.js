const mongoose = require('mongoose');
const debug = require('debug')('mongo');

mongoose.connect('mongodb://localhost/playground', { useNewUrlParser: true })
    .then(() => debug('connected to mongoDB ...'))
    .catch(err => debug('Cannot connecto to mongoDB...', new Error(err)));


const courseSchema = mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: { type: Date, default: Date.now },
    isPublished: Boolean
});

const Course = mongoose.model('Course', courseSchema);

createCourse();

async function createCourse() {
    const course = new Course({
        name: 'angular course',
        author: 'David',
        tags: ['nodejs', 'beginner'],
        isPublished: false
    });
    const result = await course.save();
    debug(result);
}