// Sliding Window
var lengthOfLongestSubstring = function(s) {
    let n = s.length;
    let maxLength = 0;
    let lastIndex = new Map();
    
    let start = 0;
    for (let end = 0; end < n; end++) {
        let currentChar = s[end];
        start = Math.max(start, lastIndex.get(currentChar) || 0);
        maxLength = Math.max(maxLength, end - start + 1);
        lastIndex.set(currentChar, end + 1);
    }
    
    return maxLength;
};

// normal
var lengthOfLongestSubstring = function (s) {
    let lStr = ""
    for (let i in s) {
        let str = s[i]
        for (let j = Number(i) + 1; j <= s.length - 1; j++) {
            if (!str.includes(s[j])) {
                if (str)
                    str += s[j]
                else
                    str += s[i] + s[j]
            }
            else
                break
        }
        if (lStr.length < str.length)
            lStr = str
    }
    return lStr.length
};
