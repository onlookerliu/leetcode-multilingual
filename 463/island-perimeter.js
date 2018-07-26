/**
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter(grid) {
    if (grid.length == 0) {
        return 0;
    }

    let [m, n] = [grid.length, grid[0].length];
    let peri = 0;

    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 0)
                continue;

            for (let l = 0; l < 4; l++) {
                let neighbourX = i + dir[l][0];
                let neighbourY = j + dir[l][1];

                if (neighbourX < 0 || neighbourX >= m || neighbourY < 0 || neighbourY >= n) {
                    peri++;
                    continue;
                }

                peri += !grid[neighbourX][neighbourY];
            }
        }
    }
    return peri;
}
/**
 * @param {number[][]} grid
 * @return {number}
 */
function islandPerimeter(grid) {
    if (grid.length == 0) {
        return 0;
    }

    let [m, n] = [grid.length, grid[0].length];
    let peri = 0;

    const dir = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] == 0)
                continue;

            for (let l = 0; l < 4; l++) {
                let neighbourX = i + dir[l][0];
                let neighbourY = j + dir[l][1];

                if (neighbourX < 0 || neighbourX >= m || neighbourY < 0 || neighbourY >= n) {
                    peri++;
                    continue;
                }

                peri += !grid[neighbourX][neighbourY];
            }
        }
    }
    return peri;
}
