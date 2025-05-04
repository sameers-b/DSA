// Problem: Check if a string contains a specific substring.

function containsSubstring(str, substr) {
    return str.includes(substr);
  }
  
  console.log(containsSubstring("Hello world", "world")); // true