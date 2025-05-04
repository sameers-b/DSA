function createCounter() {
    let count = 0;
    return function() {
      return ++count;
    };
  }
  const counter = createCounter();
  console.log(counter()); // 1
  console.log(counter()); // 2


// Explanation:

// The inner function maintains access to count variable

// Creates private state that persists between calls