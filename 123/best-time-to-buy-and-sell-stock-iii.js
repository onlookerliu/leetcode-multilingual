/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let [buy1, buy2] = [-Infinity, -Infinity];
    let [sell1, sell2] = [0, 0];
    for (let price of prices) {
        if (buy1 < -price)
            buy1 = -price;
        if (sell1 < buy1 + price)
            sell1 = buy1 + price;
        if (buy2 < sell1 - price)
            buy2 = sell1 - price;
        if (sell2 < buy2 + price)
            sell2 = buy2 + price;
    }
    return sell2;
};

let prices = [3, 3, 5, 0, 0, 3, 1, 4];
console.log(maxProfit(prices));
