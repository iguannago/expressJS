const EventEmitter = require(`events`);

class Logger extends EventEmitter {
    log(message) {
        console.log(message);
        this.emit('messageLogged', {
            id: 1,
            url: 'http://localhost',
            name: 'david'
        });
    }
}


module.exports = Logger;