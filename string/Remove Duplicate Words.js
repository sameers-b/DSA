// Question: Remove duplicate words from a sentence while preserving order.

function removeDuplicateWords(sentence) {
    const words = sentence.split(/\s+/);
    const unique = [];
    const seen = new Set();
    
    for (const word of words) {
      if (!seen.has(word)) {
        seen.add(word);
        unique.push(word);
      }
    }
    
    return unique.join(' ');
  }
  
  // Example
  console.log(removeDuplicateWords("hello world world hello")); // "hello world"