/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    prices.push(0);

    let begin;
    let profit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (i == 0) {
            begin = prices[i];
            continue;
        }

        if (prices[i] >= prices[i - 1])
            continue;

        profit += (prices[i - 1] - begin);
        begin = prices[i]
    }
    return profit;
};


var maxProfit = function (prices) {
    if (!prices.length)
        return 0;

    let buy = [];
    let sell = [];

    prices.forEach(function (item, index) {
        if (index == 0) {
            buy[index] = -item;
            sell[index] = 0;
        } else {
            buy[index] = Math.max(buy[index - 1], sell[index - 1] - item);
            sell[index] = Math.max(sell[index - 1], buy[index - 1] + item);
        }
    });

    let len = prices.length;
    return sell[len - 1];
};