/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    while (num.toString().length > 1) {
        num = num.toString().split('').map(item => item - '0').reduce((acc, x) => acc + x);
    }
    return num;
};