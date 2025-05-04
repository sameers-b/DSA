// Question: Check if two words are anagrams (same letters, different order).

function isAnagram(str1, str2) {
    const normalize = str => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
  }
  
  
  // Example
  console.log(isAnagram("listen", "silent")); // true
  console.log(isAnagram("hello", "world")); // false