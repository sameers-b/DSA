//  Count how many times each word appears in a paragraph (case insensitive).

function wordFrequency(paragraph) {
    const words = paragraph.toLowerCase().match(/\b\w+\b/g);
    const frequency = {};
    
    words.forEach(word => {
      frequency[word] = (frequency[word] || 0) + 1;
    });
    
    return frequency;
  }
  
  // Example
  console.log(wordFrequency("Hello hello world World"));
  // { hello: 2, world: 2 }