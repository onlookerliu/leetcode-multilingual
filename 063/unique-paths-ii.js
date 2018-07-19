/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (!obstacleGrid.length)
        return 0;
    let [m, n] = [obstacleGrid.length, obstacleGrid[0].length];
    let grid = [...Array(m)].map(e => Array(n).fill(0));
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n && obstacleGrid[i][j] == 0; j++) {
            if (i-1 >=0 && j-1 >= 0)
                grid[i][j] += grid[i-1][j] + grid[i][j-1];
            else if (i-1 >= 0)
                grid[i][j] += grid[i-1][j];
            else if (j-1 >= 0)
                grid[i][j] += grid[i][j-1];
            else
                grid[i][j] = 1;
        }
    }
    return grid[m-1][n-1];
};