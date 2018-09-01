console.log('Before');
getUser(1, displayUser);
console.log('After');

function displayUser(user) {
    console.log(user);
    getRepos(user.gitUsername, displayRepos);
}

function displayRepos(repos) {
    console.log(repos);
    getCommits(repos[0], displayCommits);
}

function displayCommits(commits) {
    console.log(commits);
}

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

function getCommits(repo, callback) {
    setTimeout(() => {
        console.log(`getting commits for the ${repo} repo...`);
        callback(['commit1', 'commit2', 'commit3']);
    }, 2000);
}