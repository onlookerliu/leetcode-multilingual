/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    let len = prices.length;
    if (len == 0)
        return 0;
    let res = [];
    for (let i = 0; i < len; i++) {
        let start = i;
        let buyIn = prices[start];
        let sellOut = Math.max(...prices.slice(start + 1, len));
        let profit = sellOut - buyIn;
        profit = profit > 0 ? profit : 0;
        res.push(profit);
    }
    return Math.max(...res);
};