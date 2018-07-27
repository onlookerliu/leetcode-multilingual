/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    if (!s.length) return "";
    let maxLen = 0;
    let res = "";
    for (let i = 0; i < 2*s.length-1; i++) {
        let left = i >> 1;
        let right = i >> 1;
        (i & 1) && right++;
        let str = searchPalindrome(s, left, right);
        if (str.length > maxLen) {
            maxLen = str.length;
            res = str;
        }
    }
    return res;
};

function searchPalindrome(s, left, right) {
    while (left >= 0 && right < s.length && s.charAt(left) == s.charAt(right)) {
        left--;
        right++;
    }
    return s.substring(left+1, right);
}

console.log(longestPalindrome("babad"));
