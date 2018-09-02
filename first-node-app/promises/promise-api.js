const p = Promise.reject(new Error('error message'));
p.then(result => console.log(result))
    .catch(error => console.log(error.message));