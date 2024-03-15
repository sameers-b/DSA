// my solution
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let first_positive=1;
    // Filter out negative numbers
    let filteredArray = nums.filter(num => num > 0);

    // Sort the remaining positive numbers
     filteredArray = filteredArray.sort((a, b) => a - b);

    if(filteredArray[0]!=first_positive) return first_positive;

    for(let num of filteredArray){
        if(first_positive == num)
        first_positive = num+1
        else if(num<first_positive)
        first_positive= first_positive
        else
          return first_positive
    } 
    return first_positive;
};

// --------------------------------------------------------------------------

  /**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    nums = new Set(nums)
   let smallest=1
   while(nums.has(smallest)){
       smallest++
   }
    return smallest
};
// ---------------------------------------------------------------
var firstMissingPositive = function(nums) {
    var min = 1
    nums.sort((a,b)=>a-b) 
    for(let i=0;i<nums.length;i++){
        if(min===nums[i]){
            min++
        }
    }
    
    return min
};
// -----------------------------------------------------------------
const firstMissingPositive = function (nums) {
    const arr = nums.sort((a, b) => a - b);
    return arr.reduce((min, num) => (num == min) ? min + 1 : min, 1);
}

// ---------------------------------------------------------------
