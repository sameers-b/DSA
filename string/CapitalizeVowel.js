function capitalizeVowels(paragraph) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let result = '';
  
    for (let char of paragraph) {
      if (vowels.includes(char.toLowerCase())) {
        result += char.toUpperCase();
      } else {
        result += char;
      }
    }
  
    return result;
  }
  
  const text = "This Is A Sample";
  const result = capitalizeVowels(text);
  console.log(result);  // ThIs Is A SAmplE
  