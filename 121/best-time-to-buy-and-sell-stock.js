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


/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let minBuys = [];
    let maxSells = [];
    prices.reduce((minBuy, p) => {
        minBuy = Math.min(minBuy, p);
        minBuys.push(minBuy);
        return minBuy;
    }, Infinity);
    prices.reduceRight((maxSell, p) => {
        maxSell = Math.max(maxSell, p);
        maxSells.unshift(maxSell);
        return maxSell;
    }, -Infinity);
    let res = 0;
    for (let i = 0, len = prices.length; i < len; i++) {
        let [buy, sell] = [minBuys[i], maxSells[i]];
        res = Math.max(res, sell - buy);
    }
    return res;
};