/**
 * @param {number[][]} grid
 * @return {number}
 */
function maxAreaOfIsland(grid) {
    let currArea, maxArea = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] == 1) {
                currArea = area(grid, i, j);
                if (currArea > maxArea)
                    maxArea = currArea;
            }
        }
    }
    return maxArea;
};

function area(grid, i, j) {
    if (grid[i][j] != 1)
        return 0;
    grid[i][j] = 2;
    let sum = 1;

    if (i - 1 >= 0) {
        sum += area(grid, i - 1, j);
    }
    if (i + 1 < grid.length) {
        sum += area(grid, i + 1, j);
    }
    if (j - 1 >= 0) {
        sum += area(grid, i, j - 1);
    }
    if (j + 1 < grid[0].length) {
        sum += area(grid, i, j + 1);
    }
    return sum;
}