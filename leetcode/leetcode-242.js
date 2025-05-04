/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
       return false;
   }
   if(s.split("").sort().join()==t.split("").sort().join()) return true
   return false
};

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