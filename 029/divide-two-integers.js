var divide = function (dividend, divisor) {
    var MAX_POSITIVE_INT = ~(1 << 31);
    var MAX_NEGATIVE_INT = (1 << 31);

    let sign;
    if ((dividend > 0 && divisor < 0) || (dividend < 0 && divisor > 0)) {
        sign = -1;
    } else {
        sign = 1;
    }

    var ans = sign > 0 ? Math.floor(dividend / divisor) : -Math.floor(-dividend / divisor);

    if (ans < MAX_NEGATIVE_INT)
        ans = MAX_NEGATIVE_INT;

    if (ans > MAX_POSITIVE_INT)
        ans = MAX_POSITIVE_INT;

    return ans;
};