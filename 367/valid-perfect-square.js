/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let sum = 0;
    let i = 1;
    while (sum < num) {
        sum += i;
        i += 2;
    }
    if (sum == num) {
        return true;
    }
    return false;
};