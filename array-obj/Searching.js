function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            return i; // Found, return index
        }
    }
    return -1; // Not found
}

console.log(linearSearch([10, 20, 30, 40, 50], 30)); // Output: 2


function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return -1;
}

console.log(binarySearch([10, 20, 30, 40, 50], 30)); // Output: 2
