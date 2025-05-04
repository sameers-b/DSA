// Check if a word/sentence is a palindrome

function isPalindrome(input) {
    const clean = input.toLowerCase().replace(/[^a-z0-9]/g, '');
    return clean === clean.split('').reverse().join('');
  }
  
  // Examples
  console.log(isPalindrome("madam")); // true (word)
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // true (sentence)