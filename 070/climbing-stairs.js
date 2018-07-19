/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let hash = [];
    hash[1] = 1;
    hash[2] = 2;

    for (let i = 3; i <= n; i++) {
        hash[i] = hash[i - 1] + hash[i - 2];
    }
    return hash[n];
};