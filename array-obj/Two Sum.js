// Question: Find two numbers that add up to a target.

function twoSum(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
      const complement = target - nums[i];
      if (complement in map) {
        return [map[complement], i];
      }
      map[nums[i]] = i;
    }
    return [];
  }
  
  // Example
  console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]


  const twoSum=(arr, target)=>{
  const obj = {}

  for (let i = 0; i < arr.length; i++) {
  	const diff = target - arr[i]
   
  	if (obj[diff]) return [i, obj[diff]]

  	obj[arr[i]] = i
  }
}