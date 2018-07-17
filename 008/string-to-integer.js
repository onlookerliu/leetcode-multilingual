/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
    str = str.trim();
    let num = 0;

    let INT_MIN = 1 << 31;
    let INT_MAX = -(1 << 31) - 1;
    let pattern = /^(\-|\+)?[0-9]+/;
    let tmp = pattern.exec(str);

    if (tmp) {
        num = Number(tmp[0]);
        if (num < INT_MIN)
            return INT_MIN;
        if (num > INT_MAX)
            return INT_MAX;
    }

    return num;
};