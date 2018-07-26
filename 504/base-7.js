/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    if (!num) return "0";
    let res = [];
    let sign = num > 0 ? 1 : -1;
    num = sign * num;
    while (num != 0) {
        res.unshift(num % 7);
        num = (num - (num % 7)) / 7;
    }
    if (sign < 0) {
        res.unshift("-");
    }
    return res.join("");
};