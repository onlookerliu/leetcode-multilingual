/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let arr = [];
    while (n > 0) {
        let tmp = n % 2;
        arr.push(tmp);
        n = (n - tmp) >> 1;
    }
    while (arr.length < 32) {
        arr.push(0);
    }
    return arr.reduce((acc, x) => acc * 2 + x);
};