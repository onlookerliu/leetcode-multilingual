/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n == 0)
        return false;
    let a = ~~(Math.log(n) / Math.log(2));
    return n === (1 << a);
};