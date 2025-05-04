const moveAllZeroToEnd=(arr)=>{
let count = 0;
    for (let i = 0; i < arr.length; i++) {
        // If the current element is non-zero
        if (arr[i] !== 0) {
            // Swap the current element with the 0 at index 'count'
            [arr[i], arr[count]] = [arr[count], arr[i]];
            // Move 'count' pointer to the next position
            count++;
        }
    }
    return arr
}