/**
 * @param {number[][]} matrix
 * @return {number}
 */
var longestIncreasingPath = function (matrix) {
    if (!matrix.length || !matrix[0].length)
        return 0;
    let [m, n] = [matrix.length, matrix[0].length];

    // let path = new Array(m).map(r => new Array(n).fill(0));
    let path = [];
    for (let i = 0; i < m; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(0);
        }
        path.push(row);
    }

    let res = 0;
    let dx = [-1, 1, 0, 0];
    let dy = [0, 0, -1, 1];

    let dfs = function (x, y) {
        if (path[x][y] > 0)
            return path[x][y];

        path[x][y] = 1;
        for (let i = 0; i < 4; i++) {
            let nx = x + dx[i];
            let ny = y + dy[i];
            if (0 <= nx && nx < m && 0 <= ny && ny < n && matrix[x][y] < matrix[nx][ny]) {
                path[x][y] = max(path[x][y], dfs(nx, ny) + 1);
            }
        }
        return path[x][y];
    };

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            res = max(res, dfs(i, j));
        }
    }

    return res;
};

let max = function (a, b) {
    if (a > b)
        return a;
    return b;
}