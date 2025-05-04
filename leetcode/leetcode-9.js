/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let reverse= x.toString().split("").reverse().join("")
    if(x==reverse) return true
    return false
};