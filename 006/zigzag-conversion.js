/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows == 1) return s;

    let res = [...Array(numRows)].map(r => Array(s.length));
    let max_cols;

    function traverse(x, y, s, i, numRows) {

        if (s.length == i) {
            max_cols = y;
            return;
        }
        res[x][y] = s[i];

        if (y % (numRows - 1) == 0 && x != numRows - 1) {
            traverse(x + 1, y, s, i+1, numRows);
        } else {
            traverse(x - 1, y + 1, s, i + 1, numRows);
        }
    }

    traverse(0, 0, s, 0, numRows);
    let str = [];
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j <= max_cols; j++) {
            if (res[i][j] != undefined)
                str.push(res[i][j]);
        }
    }
    return str.join("");
};