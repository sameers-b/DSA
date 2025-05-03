// if they have the same characters with the same frequency, 
// but the order of the characters is different. For example, “listen” and “silent” 


function isAnagram(str1, str2) {
    // Your implementation
    if (str1.length !== str2.length) return false;

    if (str1.split("").sort().join("").toLowerCase() === str2.split("").sort().join("").toLowerCase()) return true
    return false
}

module.exports = isAnagram



// second solution

var isAnagram = function(s, t) {
    if (t.length !== s.length) return false;
    const counts = {};
    for (let c of s) {
        counts[c] = (counts[c] || 0) + 1;
    }
    for (let c of t) {
        if (!counts[c]) return false;
        counts[c]--;
    }
    return true;
};