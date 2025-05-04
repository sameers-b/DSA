function chunkArray(arr, n) {
    // Your implementation
    let result = [];
    let chunk = []

    if (arr.length <= n)
        return arr.length==0?[]:[arr];
    
    for (let i = 0; i < arr.length; i++){
        chunk.push(arr[i])
        if (chunk.length == n||i === arr.length - 1) {
            result.push([...chunk])
            chunk.length=0
        }
    }
    return result
}

module.exports = chunkArray


// second way
function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  }
  
  console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1,2], [3,4], [5]]
