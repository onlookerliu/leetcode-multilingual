/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    digits = digits.reverse();
    let len = digits.length;
    let carry = 0;
    let res = [];
    for (let i = 0; i < len; i++) {
        let sum = i == 0 ? digits[i] + 1 + carry : digits[i] + carry;
        carry = (sum - sum % 10) / 10;
        res[i] = sum % 10;
    }
    if (carry) {
        res[len] = carry;
    }

    return res.reverse();
};

var plusOne = function(digits) {
    let res = [];
    let last = digits.reduceRight((carry, digit) => {
        res.push((carry + digit) % 10);
        return Math.floor((carry + digit) / 10);
    }, 1);
    if (last != 0)
        res.push(last);
    res.reverse();
    return res;
};