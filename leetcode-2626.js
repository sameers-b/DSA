// 2626. Array Reduce Transformation

/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let temp=init;
    for(let i in nums){
        if(i==0)
          temp=fn(init,nums[i])
        else
          temp=fn(temp,nums[i])
    }
    return temp;
};