/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let hash = {};

    for (let item of s)
        hash[item] = ~~hash[item] + 1;

    let ans = 0;
    let oddCount = false;

    for (let key in hash) {
        let count = hash[key];
        ans += count & 1 ? count - 1 : count;
        (count & 1) && (oddCount = true)
    }

    return ans + oddCount;

};