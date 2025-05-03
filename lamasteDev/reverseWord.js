function reverseWords(sentence) {
    // Your implementation
    return sentence.split(" ").map(wrd=>wrd.split("").reverse().join("")).join(" ")
}


module.exports = reverseWords