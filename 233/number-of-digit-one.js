/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
    let count = 0;
    let factor = 1;
    let digit = 0;
    let high = 0;
    let low = 0;

    while (Math.floor(n / factor) > 0) {
        digit = Math.floor((n % (factor * 10)) / factor);
        high = Math.floor(n / (factor * 10));

        if (digit == 0) {
            count += high * factor;
        } else if (digit == 1) {
            count += high * factor + low + 1;
        } else {
            count += (high + 1) * factor;
        }

        low += digit * factor;
        factor *= 10;
    }
    return count;
};