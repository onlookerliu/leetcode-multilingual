/**
 * @param {string} S
 * @return {number[][]}
 */
var largeGroupPositions = function (S) {
    let preIndex = 0, preChar = S[0];
    let res = [];
    for (let i = 0, len = S.length; i < len; i++) {
        let item = S[i];
        if (item !== preChar) {
            if (i - preIndex >= 3) {
                res.push([preIndex, i - 1]);
            }
            preIndex = i;
            preChar = item;
        }
    }
    if (S.length - preIndex >= 3) {
        res.push([preIndex, S.length - 1]);
    }
    return res;
};