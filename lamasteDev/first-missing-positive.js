function firstMissingPositive(nums) {

  // let n = 1;
  // while (true) {
  //   if (!nums.includes(n)) {
  //     return n
  //   }
  //   n++;
  // }

  // -------------------------------------------
  // let setObj = new Set(nums)
  // let n = 1
  // while (true) {
  //   if (!setObj.has(n)) {
  //     return n
  //   }
  //   n++
  // }

  // -------------------------------------------
  const n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] <= 0 || nums[i] > n) {
      nums[i] = n + 1;
    }
  }

  for (let i = 0; i < n; i++) {
    const val = Math.abs(nums[i]);
    if (val >= 1 && val <= n) {
      nums[val - 1] = -Math.abs(nums[val - 1]);
    }
  }

  for (let i = 0; i < n; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }

  return n + 1;

}

module.exports = { firstMissingPositive };
