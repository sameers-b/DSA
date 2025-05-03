function findMissingNumber(nums) {
    // Your implementation
    let n = nums.length;
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = nums.reduce((sum, num) => sum + num, 0)
    return expectedSum - actualSum;
}

module.exports = findMissingNumber