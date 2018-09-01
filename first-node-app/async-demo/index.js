console.log('Before');

getUser(1, (user) => {
    console.log(user);
});

console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user froma a database...');
        callback({
            id: 1,
            gitUsername: 'David'
        });
    }, 2000);
}