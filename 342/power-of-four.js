/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
    if (num == 0)
        return false;
    let a = ~~(Math.log(num) / Math.log(4));
    return num === 1 << a * 2;
};