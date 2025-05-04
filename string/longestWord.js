// Find the longest word in a paragraph

function longestWord(paragraph) {
    const words = paragraph.toLowerCase().match(/\b\w+\b/g);
    return words.reduce((longest, current) => 
      current.length > longest.length ? current : longest, "");
  }
  
  // Example
  console.log(longestWord("The quick brown fox jumps over the lazy dog.")); // "jumps"