console.log('Before');

getUser(1)
  .then(user => getRepositories(user.gitHubUsername))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log(`display commits: ${commits}`))
  .catch(err => console.log(err));

console.log('After');

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getting user...');
      resolve({
        id: id,
        gitHubUsername: 'david'
      });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getting repos...');
      resolve(['repo1', 'repo2', 'repo3']);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getting commits...');
      resolve(['commit1', 'commit2']);
    }, 2000);
  });
}