/*second largest*/

let arr =[9,6,3,0,10,0,7,4,7,8];
// const findSecondLargest=(arr)=>{
//   let firstLargest=-1;
//   let secondLargest= -1;
//   for(let i of arr){
//     if(i>firstLargest){
//       secondLargest=firstLargest;
//       firstLargest=i;
//     }else if(i<firstLargest&&i>secondLargest){
//       secondLargest=i;
//     }
//   }
//   return {firstLargest,secondLargest};
// }
// const findLargest=(arr)=>{
//   let firstLargest=-1;
//   let secondLargest= arr.sort();
//   for(let i of arr){
//     if(i>firstLargest){
//       secondLargest=firstLargest;
//       firstLargest=i;
//     }
//   }
//   return firstLargest;
// }

// const moveAllZeroToEnd=(arr)=>{
// let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         // If the current element is non-zero
//         if (arr[i] !== 0) {
//             // Swap the current element with the 0 at index 'count'
//             [arr[i], arr[count]] = [arr[count], arr[i]];
//             // Move 'count' pointer to the next position
//             count++;
//         }
//     }
//     return arr
// }

// const twoSum=(arr, target)=>{
//   const obj = {}

//   for (let i = 0; i < arr.length; i++) {
//   	const diff = target - arr[i]
   
//   	if (obj[diff]) return [i, obj[diff]]

//   	obj[arr[i]] = i
//   }
// }

// const checkPrimeOrNot=(num)=>{
//   if (num < 2) return false;
//   for(let i=2;i<=num/2;i++){
//     if(num%i===0) return false;  
//   }
//   return true;
// }

// const findAllPrimeNumber=(start,end)=>{
//   let list=[]
//   for(let i=start;i<=end;i++){
//     if(checkPrimeOrNot(i))list.push(i)
//   }
//   return list
// }

// const isEven=(num)=>{
//   if(num%2===0) return true
//   return false
// }

// const isOdd=(num)=>{
//   if(num%2!=0) true
//   return false
// }

// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === target) {
//             return i; // Found, return index
//         }
//     }
//     return -1; // Not found
// }

// console.log(linearSearch([10, 20, 30, 40, 50], 30)); // Output: 2

// function binarySearch(arr, target) {
//     let left = 0, right = arr.length - 1;
    
//     while (left <= right) {
//         let mid = Math.floor((left + right) / 2);
        
//         if (arr[mid] === target) {
//             return mid;
//         } else if (arr[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
    
//     return -1;
// }

// console.log(binarySearch([10, 20, 30, 40, 50], 30)); // Output: 2


// const sortArr=(arr)=>{
//   return arr.sort((a,b)=>a-b)
// }

// function bubbleSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
//             }
//         }
//     }
//     return arr;
// }

// console.log(bubbleSort([64, 25, 12, 22, 11])); // Output: [11, 12, 22, 25, 64]


// console.log("Hello, World!",sortArr(arr));