/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    if (n == 1) {
        return "1";
    }
    let str = countAndSay(n - 1) + "$";
    let arr = str.split('');
    let len = arr.length;
    let count = 1;
    let res = "";

    for (let i = 0; i < len - 1; i++) {
        if (arr[i] === arr[i + 1]) {
            count++;
        } else {
            res += (count + arr[i]);
            count = 1;
        }
    }

    return res;
};