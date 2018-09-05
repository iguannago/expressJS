getCustomer(1, (customer) => {
  console.log('Customer: ', customer);
  if (customer.isGold) {
    getTopMovies((movies) => {
      console.log('Top movies: ', movies);
      sendEmail(customer.email, movies, () => {
        console.log('Email sent...')
      });
    });
  }
});

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: 'David Crespo',
        isGold: true,
        email: 'email'
      });
    }, 4000);
  });
}

function getTopMovies(callback) {
  setTimeout(() => {
    callback(['movie1', 'movie2']);
  }, 4000);
}

function sendEmail(email, movies, callback) {
  setTimeout(() => {
    callback();
  }, 4000);
}