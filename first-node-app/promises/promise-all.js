const facebookCall = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Facebook call...');
        reject(new Error('Facebook call error'));
    }, 4000);
});

const twitter = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Twitter call...');
        resolve({
            id: 'call 2'
        });
    }, 2000);
});

Promise.all([facebookCall, twitter])
    .then(result => console.log(result))
    .catch(err => console.log(err));