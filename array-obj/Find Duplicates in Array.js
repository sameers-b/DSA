// Problem: Find all duplicate values in an array.

function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) !== index);
  }
  
  console.log(findDuplicates([1, 2, 3, 2, 4, 3])); // [2, 3]