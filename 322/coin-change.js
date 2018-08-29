/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    let dp = new Array(amount+1).fill(amount+1);
    dp[0] = 0;

    for (let i = 1; i <= amount; i++) {
        for (let c of coins) {
            if (c <= i && dp[i] > dp[i-c]+1) {
                dp[i] = dp[i-c]+1;
            }
        }
    }

    if (dp[amount] > amount) {
        return -1;
    }
    
    return dp[amount];
};

let coins = [1, 2, 5];
let amount = 11;
console.log(coinChange(coins, amount));