/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
    const hasOnlyOneBit = n => (n & (n - 1)) == 0;

    let t = n ^ (n >> 1);
    return hasOnlyOneBit(t ^ (t >> 1));
};