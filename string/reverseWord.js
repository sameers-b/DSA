// reverses each word in a sentence

function reverseWords(sentence) {
    return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
  }
  
  // Example
  console.log(reverseWords("Hello World")); // "olleH dlroW"


  function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  console.log(reverseString("hello")); // "olleh"