/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function (A) {
    let [m, n] = [A.length, A[0].length];
    let res = [...Array(n)].map(e => Array(m));

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            res[i][j] = A[j][i];
        }
    }
    return res;
};