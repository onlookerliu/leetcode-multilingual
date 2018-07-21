/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    if (!s.length)
        return true;
    s = s.replace(/[\W]/g, '');
    s = s.toLowerCase();
    return s == s.split('').reverse().join('');
};