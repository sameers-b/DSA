/**
 * @param {number[]} arr
 * @param {number} size
 * @return {number[][]}
 */
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// arr=[1,2,3,4,5,6,7,8,9,10]
// size=3
// output=[[1,2,3],[4,5,6],[7,8,9],[10]]
var convertChunks = function (arr, size) {
    var result = [];
    var chunk = [];
    for (var i = 0; i < arr.length; i++) {
        chunk.push(arr[i]);
        if (chunk.length === size || i === arr.length - 1) {
            result.push(__spreadArray([], chunk, true));
            chunk.length = 0;
        }
    }
    return result;
};
console.log(convertChunks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
