function findMaxNumber(arr) {
    if (arr.length == 0) return null
    // Your implementation
    // -----------------------------------------------------
    return arr.sort((a, b) => b - a)[0]

    // -----------------------------------------------------
    let max = arr[0];
    for (let i of arr) {
        max = Math.max(i, max)
    }
    return max
}

//For the purpose of user debugging.
findMaxNumber([1, 2, 3, 4, 5]);

module.exports = findMaxNumber