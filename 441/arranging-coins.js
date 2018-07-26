/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    if (!n) return 0;
    for (let k = 1; ; k++) {
        if (n >= k * (k + 1) / 2 && n < (k + 1) * (k + 2) / 2)
            return k;
    }
};

var arrangeCoins = function(n) {
    let ans = Math.sqrt(1 + 8 * n) - 1;
    ans /= 2;
    return ~~ans;
}