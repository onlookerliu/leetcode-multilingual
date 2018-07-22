/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    let dp = [];
    let [i, j, k] = [0, 0, 0];
    dp[0] = 1;
    for (let l = 1; l < n; l++) {
        dp[l] = Math.min(dp[i] * 2, dp[j] * 3, dp[k] * 5);
        if (dp[l] == dp[i] * 2) i++;
        if (dp[l] == dp[j] * 3) j++;
        if (dp[l] == dp[k] * 5) k++;
    }
    return dp[n - 1];
};