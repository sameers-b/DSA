// Question: Return all sentences containing a specific word (case insensitive).



function findSentencesWithWord(paragraph, searchWord) {
    const sentences = paragraph.split(/[.!?]+/);
    const lowerSearch = searchWord.toLowerCase();
    
    return sentences.filter(sentence => 
      sentence.toLowerCase().includes(lowerSearch)
    ).map(s => s.trim());
  }
  
  // Example
  const text = "Hello world. How are you? The world is beautiful.";
  console.log(findSentencesWithWord(text, "world"));
  // ["Hello world", "The world is beautiful"]