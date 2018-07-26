/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
    let [r, c] = [M.length, M[0].length];
    let ans = [...Array(r)].map(e => Array(c));
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            let count = 0;
            let sum = 0;
            for (let m = i - 1; m < i + 2; m++) {
                for (let n = j - 1; n < j + 2; n++) {
                    if (m >= 0 && m < r && n >= 0 && n < c) {
                        count++;
                        sum += M[m][n];
                    }
                }
            }
            ans[i][j] = Math.floor(sum / count);
        }
    }
    return ans;
};