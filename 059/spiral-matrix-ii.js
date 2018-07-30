/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let res = [...Array(n)].map(e => Array(n));
    let val = 1, p = n;
    for (let i = 0; i < (n >> 1); i++, p -= 2) {
        for (let col = i; col < i+p; ++col)
            res[i][col] = val++;
        for (let row = i+1; row < i+p; ++row)
            res[row][i+p-1] = val++;
        for (let col = i+p-2; col >= i; --col)
            res[i+p-1][col] = val++;
        for (let row = i+p-2; row > i; --row)
            res[row][i] = val++;
    }
    if (n % 2 != 0) res[n>>1][n>>1] = val;
    return res;
};

let n = 3;
console.log(generateMatrix(n));
