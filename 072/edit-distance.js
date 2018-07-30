/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
    let [m, n] = [word1.length, word2.length];
    let cost;
    let dp = [...Array(m+1)].map(e => Array(n+1));
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }

    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = Math.min(dp[i-1][j]+1, dp[i][j-1]+1)

            cost = word1[i-1] == word2[j-1] ? 0 : 1;

            dp[i][j] = Math.min(dp[i][j], dp[i-1][j-1]+cost);
        }
    }
    return dp[m][n];
};