/**
 * @param {number[]} cost
 * @return {number}
 */
function minCostClimbingStairs(cost) {
    let len = cost.length + 1;
    let dp = [];
    dp.length = len;

    dp[0] = 0;
    dp[1] = 0;

    for (let i = 2; i < len; i++) {
        dp[i] = Math.min(dp[i - 2] + cost[i - 2], dp[i - 1] + cost[i - 1]);
    }
    return dp[len - 1];
}