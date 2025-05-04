// Problem: Capitalize the first letter of each word in a sentence.

function capitalizeWords(sentence) {
    return sentence.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
  
  console.log(capitalizeWords("hello world")); // "Hello World"