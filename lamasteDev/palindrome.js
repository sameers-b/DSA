function isWordPalindrome(word) {
    return word === word.split('').reverse().join('');
  }
  
  console.log(isWordPalindrome("racecar")); // true

// second method

  function isWordPalindrome(word) {
    let left = 0, right = word.length - 1;
    while (left < right) {
      if (word[left] !== word[right]) return false;
      left++;
      right--;
    }
    return true;
  }

//   for para

function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric chars
    let left = 0, right = s.length - 1;
  
    while (left < right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
    }
    return true;
  }
  
  // Test cases
  console.log(isPalindrome("A man, a plan, a canal: Panama")); // true

//   second way

function isPalindrome(s) {
    const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    return cleaned === cleaned.split('').reverse().join('');
  }