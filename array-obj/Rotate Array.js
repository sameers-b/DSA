// Question: Rotate array to the right by k steps.

function rotateArray(nums, k) {
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
    return nums;
  }
  
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  
  // Example
  console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]