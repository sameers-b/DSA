// Problem: Count how many properties an object has.

function countProperties(obj) {
    return Object.keys(obj).length;
  }
  
  console.log(countProperties({a: 1, b: 2, c: 3})); // 3