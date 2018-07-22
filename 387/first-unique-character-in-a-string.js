/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    for (let i = 0, len = s.length; i < len; i++) {
        if (i == s.lastIndexOf(s[i]) && i == s.indexOf(s[i])) {
            return i;
        }
    }
    return -1;
};