// Question: Remove duplicates from an array in-place and return new length.


function removeDuplicates(nums) {
    if (nums.length === 0) return 0;
    
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
        i++;
        nums[i] = nums[j];
      }
    }
    return i + 1;
  }
  
  // Example
  const arr = [1, 1, 2];
  console.log(removeDuplicates(arr)); // 2
  console.log(arr); // [1, 2, 2] (first 2 elements are unique)