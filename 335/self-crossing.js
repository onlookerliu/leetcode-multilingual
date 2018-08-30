/**
 * @param {number[]} x
 * @return {boolean}
 */
var isSelfCrossing = function (x) {
    let len = x.length;

    let is4th = function (i) {
        return i + 3 < len && x[i + 2] <= x[i] && x[i + 3] >= x[i + 1];
    };

    let is5th = function (i) {
        return i + 4 < len && x[i + 3] == x[i + 1] && x[i + 4] + x[i] >= x[i + 2];
    };

    let is6th = function (i) {
        return i + 5 < len && x[i + 2] > x[i] && x[i + 3] > x[i + 1] && x[i + 4] <= x[i + 2] && x[i + 4] + x[i] >= x[i + 2] && x[i + 5] + x[i + 1] >= x[i + 3];
    };

    for (let i = 0; i < len; i++) {
        if (is4th(i) || is5th(i) || is6th(i))
            return true;
    }

    return false;
};