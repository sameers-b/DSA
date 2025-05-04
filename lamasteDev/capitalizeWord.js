function capitalizeWords(sentence) {
    // Your implementation
    sentence = sentence.trim();
    // sentence = sentence.trim(/\s+/); // slpit by one or more spaces
    return sentence.split(" ").map(wrd=>wrd.charAt(0).toUpperCase()+wrd.slice(1).toLowerCase()).join(" ")
}

module.exports = capitalizeWords

// second 