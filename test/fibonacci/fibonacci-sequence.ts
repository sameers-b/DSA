// Approach : Brute Force

/**
 * Calculates the Fibonacci sequence up to the given number.
 *
 * @param {number} n - The number of elements in the Fibonacci sequence to calculate.
 * @return {number[]} - The Fibonacci sequence up to the given number.
 */
const fibonacci = (n: number): number[] => {
  if (n <= 0) return [];

  let result: number[] = [0];
  if (n === 1) return result;

  result.push(1);
  for (let i: number = 2; i < n; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
};

console.log(fibonacci(1)); // [0]
console.log(fibonacci(2)); // [0,1]
console.log(fibonacci(3)); // [0,1,1]
console.log(fibonacci(7)); // [0,1,1,2,3,5,8]

// Complexity
// Time complexity: O(n)
// Space complexity: O(n)
// -------------------------------------------------------------

// Approach : Recursion
