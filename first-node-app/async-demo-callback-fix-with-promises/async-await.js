console.log('Before');

async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(`commits: ${commits}`);
  } catch (error) {
    console.log(error);
  }
}

displayCommits();

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
      // reject(new Error('error when getting commits'));
    }, 2000);
  });
}