/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    let digits = num.length - k;
    let stack = new Array(num.length);
    let top = 0;

    for (let i = 0; i < num.length; i++) {
        while (top > 0 && stack[top - 1] > num[i] && k > 0) {
            top--;
            k--;
        }
        stack[top] = num[i];
        top++;
    }

    let i = 0;
    while (i < digits && stack[i] == '0') {
        i++;
    }

    if (i == digits) {
        return "0";
    }

    return stack.slice(i, digits).join("");
};