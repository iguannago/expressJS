const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(1);
    }, 2000);
});

p.then(result => {
    console.log(`Result: ${result}`);
})