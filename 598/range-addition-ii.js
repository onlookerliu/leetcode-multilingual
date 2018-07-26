/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function (m, n, ops) {
    let len = ops.length;
    if (len < 1) {
        return m * n;
    }

    let minA = Infinity;
    let minB = Infinity;
    for (let i = 0; i < len; i++) {
        let A = ops[i][0];
        let B = ops[i][1];
        minA = Math.min(minA, A);
        minB = Math.min(minB, B);
    }
    return minA * minB;
};