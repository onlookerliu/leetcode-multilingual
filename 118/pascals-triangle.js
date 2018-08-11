/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let res = [];
    if (!numRows)
        return res;

    res.push([1]);
    if (numRows == 1)
        return res;

    for (let i = 1; i < numRows; i++) {
        res.push(nextRow(res[i - 1]));
    }

    return res;
};

function nextRow(currRow) {
    let res = [];
    res.push(0);
    res.push(...currRow);
    for (let i = 0; i < res.length - 1; i++) {
        res[i] += res[i + 1];
    }
    return res;
}