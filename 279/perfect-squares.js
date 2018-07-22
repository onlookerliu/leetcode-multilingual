/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
    let hash = [];
    for (let i = 1; i <= n; i++) {
        hash[i] = Infinity;
    }
    hash[0] = 0;

    for (let i = 0; i <= n; i++) {
        for (let j = 1; i + j * j <= n; j++) {
            hash[i + j * j] = Math.min(hash[i + j * j], hash[i] + 1);
        }
    }
    return hash[n];
};