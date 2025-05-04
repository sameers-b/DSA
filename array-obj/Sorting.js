const sortArr=(arr)=>{
  return arr.sort((a,b)=>a-b)
}

function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
            }
        }
    }
    return arr;
}

console.log(bubbleSort([64, 25, 12, 22, 11])); // Output: [11, 12, 22, 25, 64]


console.log("Hello, World!",sortArr(arr));