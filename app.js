const log = require('./logger');

const EventEmitter = require(`events`);
const emitter = new EventEmitter();

log(`Hi World!`);

emitter.emit('messagedLogged');

