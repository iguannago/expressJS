const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
        // reject(new Error('there was an error!'));
    }, 6000);
});

console.log('*** 1')

p.then(result => {
    console.log(`Result: ${result}`);
}).catch(err => console.log(err));

console.log('*** 2');