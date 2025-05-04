// Problem: Check if two arrays contain the same elements in the same order.

function arraysEqual(arr1, arr2) {
    return arr1.length === arr2.length && 
           arr1.every((val, index) => val === arr2[index]);
  }
  
  console.log(arraysEqual([1, 2, 3], [1, 2, 3])); // true
  console.log(arraysEqual([1, 2, 3], [1, 3, 2])); // false