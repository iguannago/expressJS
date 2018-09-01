console.log('Before');

getUser(1, (user) => {
    console.log(user);
    getRepos(user.gitUsername, (repos) => {
        console.log(repos);
    });
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

function getRepos(username, callback) {
    setTimeout(() => {
        console.log(`getting repos for ${username}...`);
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000);
}