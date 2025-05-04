let arr =[9,6,3,0,10,0,7,4,7,8];

const findLargest=(arr)=>{
  let firstLargest=-1;
  let secondLargest= arr.sort();
  for(let i of arr){
    if(i>firstLargest){
      secondLargest=firstLargest;
      firstLargest=i;
    }
  }
  return firstLargest;
}

// second solution
function findMax(arr) {
    return Math.max(...arr);
    // Or: return arr.reduce((max, num) => num > max ? num : max, arr[0]);
  }