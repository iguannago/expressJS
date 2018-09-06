// getCustomer(1, (customer) => {
//   console.log('Customer: ', customer);
//   if (customer.isGold) {
//     getTopMovies((movies) => {
//       console.log('Top movies: ', movies);
//       sendEmail(customer.email, movies, () => {
//         console.log('Email sent...')
//       });
//     });
//   }
// });

async function getEmailResult() {
  try {
    const customer = await getCustomer(1);
    if (customer.isGold) {
      const movies = await getTopMovies();
      const result = await sendEmail(customer.email, movies);
      console.log(`email: ${result.email}, movies: ${result.movies}`);
    }
  } catch (error) {
    console.log(error);
  }
}

getEmailResult();


// exercise done using promises and handling errors as well.
// getCustomer(1)
//   .then((customer) => {
//     if (customer.isGold) {
//       getTopMovies()
//         .then(movies => sendEmail(customer.email, movies))
//         .then(result => console.log(`email: ${result.email}, movies: ${result.movies}`))
//         .catch(err => console.log(err));
//     }
//   })
//   .catch(err => console.log(err));

function getCustomer(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getting customer...');
      resolve({
        id: id,
        name: 'David Crespo',
        isGold: true,
        email: 'davidcrespoarroyo@gmail.com'
      });
    }, 4000);
  });
}

function getTopMovies() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('getting top movies...');
      resolve(['movie1', 'movie2']);
    }, 4000);
  });
}

function sendEmail(email, movies) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('sending email...');
      // resolve({
      //   email: email,
      //   movies: movies
      // });
      reject(new Error('error when sending email....'));
    }, 4000);
  });
}