/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
    let n = S.length;
    let res = new Array(n).fill(n);
    let [left, right] = [-n, 2*n];

    for (let i = 0; i < n; i++) {
        let j = n-i-1;
        if (S[i] == C) left = i;
        if (S[j] == C) right = j;
        res[i] = Math.min(res[i], dist(i, left));
        res[j] = Math.min(res[j], dist(j, right));
    }
    return res;
};

let dist = function (i, j) {
    if (i > j) return i - j;
    return j - i;
};

let S = "loveleetcode", C = 'e';
console.log(shortestToChar(S, C));
