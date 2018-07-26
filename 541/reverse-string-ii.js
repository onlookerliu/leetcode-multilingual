/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    // if (k == 1)
    //     return s;
    let tmp = [];
    let ans = [];
    for (let i = 0, len = s.length; i < len; i++) {
        if (i % (2 * k) < k) {
            tmp.push(s[i]);
            continue;
        }
        while (tmp.length) {
            ans.push(tmp.pop());
        }
        ans.push(s[i]);
    }
    while (tmp.length) {
        ans.push(tmp.pop());
    }
    return ans.join('');
};