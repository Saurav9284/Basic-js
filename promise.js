const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Success!');
  }, 1000);
});

promise.then((result) => {
  console.log(result); // Success!
}).catch((error) => {
  console.error(error);
});


//Promise.all

Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); // Array of resolved values
  })
  .catch(error => {
    console.error(error); // If any of the promises fail
  });

//Promise.race

Promise.race([promise1, promise2, promise3])
  .then(value => {
    console.log(value); // Value of the first resolved promise
  })
  .catch(error => {
    console.error(error); // If the first resolved promise rejects
  });


