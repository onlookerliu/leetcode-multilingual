/**
 * @param {number[][]} A
 * @return {number}
 */
var matrixScore = function (A) {
    let [m, n] = [A.length, A[0].length];
    
    let toggleRow = function (i) {
        for (let j = 0; j < n; j++) {
            A[i][j] ^= 1;
        }
    };

    let countCol = function (j) {
        let c = 0;
        for (let i = 0; i < m; i++) {
            c += A[i][j];
        }
        return c;
    };

    for (let i = 0; i < m; i++) {
        if (A[i][0] == 0) {
            toggleRow(i);
        }
    }

    let res = m;

    for (let j = 1; j < n; j++) {
        let c = countCol(j);
        if (2*c < m) {
            c = m - c;
        }
        res = 2*res + c;
    }

    return res;
};

let A = [[0, 0, 1, 1], [1, 0, 1, 0], [1, 1, 0, 0]];
console.log(matrixScore(A));
