const arr = [1, [2, [3, [4]], 5]];

const flattened = arr.flat(Infinity);
console.log(flattened); // [1, 2, 3, 4, 5]

// second way
function flattenArray(arr) {
    return arr.reduce((acc, val) => 
      Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), 
    []);
  }
  
//   const arr = [1, [2, [3, [4]], 5]];
  console.log(flattenArray(arr)); // [1, 2, 3, 4, 5]

//   third way
function flattenArray(arr) {
    let flattened = [...arr];
    let i = 0;
  
    while (i < flattened.length) {
      if (Array.isArray(flattened[i])) {
        flattened.splice(i, 1, ...flattened[i]);
      } else {
        i++;
      }
    }
    return flattened;
  }
  
//   const arr = [1, [2, [3, [4]], 5]];
  console.log(flattenArray(arr)); // [1, 2, 3, 4, 5]


//   
