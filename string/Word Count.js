// Question: Count the number of words in a paragraph.

function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
  }
  
  // Example
  console.log(countWords("This is a sample paragraph.")); // 5