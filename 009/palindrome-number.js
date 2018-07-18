/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false;
    }
    if (x < 10) {
        return true;
    }
    let str = x.toString();
    return str == str.split('').reverse().join('');
};