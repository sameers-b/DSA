/**
 * @param {number[]} arr
 * @param {number} size
 * @return {number[][]}
 */

// arr=[1,2,3,4,5,6,7,8,9,10]
// size=3
// output=[[1,2,3],[4,5,6],[7,8,9],[10]]

const convertChunks = (arr: number[], size: number): number[][] => {
  let result: number[][] = [];
  let chunk: number[] = [];

  for (let i: number = 0; i < arr.length; i++) {
    chunk.push(arr[i]);
    if (chunk.length === size || i === arr.length - 1) {
      result.push([...chunk]);
      chunk.length = 0;
    }
  }

  return result;
};

console.log(convertChunks([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3));
