// Question: Count characters excluding spaces.

function countCharsNoSpaces(text) {
    return text.replace(/\s/g, '').length;
  }
  
  // Example
  console.log(countCharsNoSpaces("Hello world")); // 10