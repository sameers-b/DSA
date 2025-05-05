//  Apply Transform Over Each Element in Array

/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newArr=[];
    for(let i in arr){
      newArr.push(fn(+arr[i],+i))
    }
    return newArr;  
  };