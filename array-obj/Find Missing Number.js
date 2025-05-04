// Question: Given an array containing n distinct numbers from 0 to n, find the missing one.

function findMissingNumber(nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((sum, num) => sum + num, 0);
    return expectedSum - actualSum;
  }
  
  // Example
  console.log(findMissingNumber([3, 0, 1])); // 2