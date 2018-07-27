/**
 * @param {number[]} A
 * @return {number}
 */
var lenLongestFibSubseq = function (A) {
    let len = A.length;
    let hash = {};
    for (let i = 0; i < len; i++) {
        hash[A[i]] = i;
    }
    let dp = [...Array(len)].map(r => Array(len).fill(2));
    let ans = 0;
    for (let j = 0; j < len; j++) {
        for (let k = j+1; k < len; k++) {
            let a_i = A[k] - A[j];
            if (a_i >= A[j]) break;
            if (hash[a_i] == undefined) continue;
            let i = hash[a_i];
            dp[j][k] = dp[i][j] + 1;
            ans = ans > dp[j][k] ? ans : dp[j][k];
        }
    }
    return ans;
};