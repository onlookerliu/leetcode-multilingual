/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n == 0)
        return false;
    let a = Math.log(n) / Math.log(3);
    return Math.pow(3, Math.round(a)) === n;
};