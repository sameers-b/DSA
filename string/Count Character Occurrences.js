// Problem: Count how many times a character appears in a string.

function countChar(str, char) {
    return [...str].filter(c => c === char).length;
  }
  
  console.log(countChar("hello", "l")); // 2