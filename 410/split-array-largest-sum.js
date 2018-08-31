/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function (nums, m) {
    let n = nums.length;
    let sums = new Array(n).fill(0);
    // dp[i][j] := min of largest sum of splitting nums[0] - nums[j] into i groups.
    let dp = [...Array(m + 1)].map(r => new Array(n).fill(Infinity));
    sums[0] = nums[0];
    for (let i = 1; i < n; ++i)
        sums[i] = sums[i - 1] + nums[i];
    for (let i = 0; i < n; ++i)
        dp[1][i] = sums[i];

    for (let i = 2; i <= m; ++i)
        for (let j = i - 1; j < n; ++j)
            for (let k = 0; k < j; ++k)
                dp[i][j] = Math.min(dp[i][j], Math.max(dp[i - 1][k], sums[j] - sums[k]));

    return dp[m][n - 1];
};