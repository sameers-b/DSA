function capitalizeWords(sentence) {
    // Your implementation
    sentence = sentence.trim();
//    sentence.split(/\s+/); // slpit by one or more spaces
    return sentence.split(/\s+/).map(wrd=>wrd.charAt(0).toUpperCase()+wrd.slice(1).toLowerCase()).join(" ")
}

module.exports = capitalizeWords

// second 