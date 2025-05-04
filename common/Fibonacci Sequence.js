
// Generate the nth Fibonacci number (optimized solution).

function fibonacci(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    
    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
  }
  
  // Example
  console.log(fibonacci(10)); // 55
  console.log(fibonacci(50)); // 12586269025 (fast with memoization)