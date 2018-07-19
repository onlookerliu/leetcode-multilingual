/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    if (m == 1 || n == 1)
        return 1;

    let matrix = [...Array(m)].map(e => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        matrix[i][0] = 1;
    }
    for (let j = 0; j < n; j++) {
        matrix[0][j] = 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
        }
    }

    return matrix[m - 1][n - 1];
};

console.log(uniquePaths(38, 20));
