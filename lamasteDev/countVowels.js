function countVowels(str) {
    // Your implementation
    let listOfVowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
    let arrOfStr = str.split("")
    let count=0;
    for (let i of arrOfStr) {
        if (listOfVowels.includes(i))
            count++;
    }
    return count
}

module.exports = countVowels