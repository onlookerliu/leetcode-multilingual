/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    let count = 0;
    while (n > 0) {
        let tmp = z % 2;
        if (1 == tmp) {
            count++;
        }
        z = (z - tmp) / 2;
    }
    return count;
};