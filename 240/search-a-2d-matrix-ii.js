/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (!matrix.length)
        return false;

    let [m, n] = [matrix.length, matrix[0].length];

    function search(x, y) {
        if (x >= 0 && x < m && y >= 0 && y < n) {
            if (matrix[x][y] == target)
                return true;
            else if (matrix[x][y] > target)
                return search(x-1, y);
            else
                return search(x, y+1);
        } else return false;
    }
    return search(m-1, 0);
    
};