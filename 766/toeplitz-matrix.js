/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
    let [m, n] = [matrix.length, matrix[0].length];
    for (let i = 0; i < m-1; i++) {
        for (let j = 0; j < n-1; j++) {
            if (matrix[i][j] != matrix[i+1][j+1])
                return false;
        }
    }
    return true;
};

var isToeplitzMatrix = function (matrix) {
    let [m, n] = [matrix.length, matrix[0].length];

    let arraysEqual = function (a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length != b.length) return false;
        for (let i = 0; i < a.length; ++i) {
            if (a[i] != b[i]) return false;
        }
        return true;
    };
    for (let i = 0; i < m-1; i++) {
        // i is the row index
        let curr = matrix[i];
        let next = matrix[i+1];
        // curr[:-1] == next[1:]
        if (!arraysEqual(curr.slice(0, curr.length-1), next.slice(1))) {
            return false;
        }
    }
    return true;
};
