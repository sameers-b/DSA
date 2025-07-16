// Question: Remove duplicates from an array in-place and return new length.

  function removeDuplicates(nums) {
  if (nums.length === 0) return [];
  
  const result = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[i - 1]) {
      result.push(nums[i]);
    }
  }
  return result;
}

const arr = [1, 1, 2];
console.log(removeDuplicates(arr)); // [1, 2]

// second way
function removeDuplicates(nums) {
  return [...new Set(nums)];
}

const arr = [3, 1, 2, 1, 3, 4];
console.log(removeDuplicates(arr)); // [3, 1, 2, 4] (order may vary)

// third way
function removeDuplicates(nums) {
  const seen = {};
  return nums.filter(item => {
    if (!seen[item]) {
      seen[item] = true;
      return true;
    }
    return false;
  });
}

const arr = [3, 1, 2, 1, 3, 4];
console.log(removeDuplicates(arr)); // [3, 1, 2, 4] (order preserved)