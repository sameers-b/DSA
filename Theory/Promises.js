// Promises are a fundamental concept in modern JavaScript for handling asynchronous operations
// A Promise is an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value.

// States of a Promise:

// Pending: Initial state, neither fulfilled nor rejected

// Fulfilled: The operation completed successfully

// Rejected: The operation failed

const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation here
    if (/* operation successful */) {
      resolve('Success!');
    } else {
      reject('Failure!');
    }
  });
  myPromise
  .then(value => {
    // Handle success
    console.log(value); // 'Success!'
  })
  .catch(error => {
    // Handle error
    console.error(error); // 'Failure!'
  });

  myPromise
  .then(handleSuccess)
  .catch(handleError)
  .finally(() => {
    console.log('Operation completed');
  });
_______________________________________

Promise Chaining
// Promises can be chained to perform sequential async operations:

fetch('/api/users')
  .then(response => response.json())
  .then(users => {
    console.log(users);
    return fetch('/api/posts');
  })
  .then(response => response.json())
  .then(posts => console.log(posts))
  .catch(error => console.error('Error in chain:', error));



// Promise.all(): Waits for all promises to resolve or any to reject
Promise.all([promise1, promise2, promise3])
  .then(values => {
    console.log(values); // Array of resolved values
  })
  .catch(error => {
    // If any promise rejects
    console.error(error);
  });

//   Waits for all promises to complete (either resolve or reject):
Promise.allSettled([promise1, promise2])
  .then(results => {
    results.forEach(result => {
      if (result.status === 'fulfilled') {
        console.log('Value:', result.value);
      } else {
        console.log('Reason:', result.reason);
      }
    });
  });

// Promise.race(): Waits until any of the promises resolves or rejects (Returns when the first promise settles:)
Promise.race([promise1, promise2])
  .then(value => {
    console.log('First to resolve:', value);
  })
  .catch(error => {
    console.error('First to reject:', error);
  });


//   Returns when the first promise fulfills (ignores rejections until all reject):
Promise.any([promise1, promise2])
  .then(value => {
    console.log('First to fulfill:', value);
  })
  .catch(errors => {
    console.error('All promises rejected:', errors);
  });


  