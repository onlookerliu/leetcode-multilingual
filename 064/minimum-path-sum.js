/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    if (!grid.length)
        return 0;
    let [m, n] = [grid.length, grid[0].length];
    let pathSum = [...Array(m)].map(e => Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (i - 1 >= 0 && j - 1 >= 0) {
                pathSum[i][j] = Math.min(pathSum[i-1][j], pathSum[i][j-1]) + grid[i][j];
            } else if (i - 1 >= 0) {
                pathSum[i][j] = pathSum[i-1][j] + grid[i][j];
            } else if (j - 1 >= 0) {
                pathSum[i][j] = pathSum[i][j-1] + grid[i][j];
            } else {
                pathSum[i][j] = grid[i][j];
            }
        }
    }
    return pathSum[m-1][n-1];
};