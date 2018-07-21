/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let hash = [];
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (!hash[i]) {
            for (let j = i * i; j < n; j += i) {
                hash[j] = true;
            }
        }
    }
    let count = 0;
    for (let i = 2; i < n; i++) {
        if (!hash[i]) {
            count++;
        }
    }
    return count;
};