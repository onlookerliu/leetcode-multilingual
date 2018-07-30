/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let res = [];
    if (!matrix.length || !matrix[0].length) return res;
    let [m, n] = [matrix.length, matrix[0].length];
    let c = m > n ? (n+1)>>1 : (m+1)>>1;
    let [p, q] = [m, n];
    for (let i = 0; i < c; ++i, p -= 2, q -= 2) {
        for (let col = i; col < i+q; ++col)
            res.push(matrix[i][col]);
        for (let row = i+1; row < i+p; ++row)
            res.push(matrix[row][i+q-1]);
        if (p == 1 || q == 1) break;
        for (let col = i+q-2; col >= i; --col)
            res.push(matrix[i+p-1][col]);
        for (let row = i+p-2; row > i; --row)
            res.push(matrix[row][i]);
    }
    return res;
};

let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
console.log(spiralOrder(matrix));
