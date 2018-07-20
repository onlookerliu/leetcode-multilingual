/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    if (n <= 0) return [0];
    else {
        let prev = grayCode(n-1);
        Array.prototype.push.apply(prev, prev.map(i => i | (1 << (n-1))).reverse());
        return prev;
    }
};