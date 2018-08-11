/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let res = new Array(rowIndex+1).fill(0);
    for (let i = 0; i <= rowIndex; i++) {
        if (i == 0) {
            res[0] = 1;
            continue;
        }
        for (let j = rowIndex; j >= 1; --j) {
            res[j] = res[j] + res[j-1];
        }
    }
    return res;
};