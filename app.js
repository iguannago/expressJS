const log = require('./logger');
const path = require('path');
const os = require('os');
const fs = require('fs');

const EventEmitter = require(`events`);
const emitter = new EventEmitter();

emitter.emit('messagedLogged');

log(`Hi World!`);

let direname = path.parse(__dirname);
log(direname);

let user = os.userInfo();
log(user);

let files = fs.readdirSync('./');
log(files);

fs.readdir('./', (error, files) => {
    if (error) log(`Error: ${error}`);
    else log(`result: ${files}`);
});



