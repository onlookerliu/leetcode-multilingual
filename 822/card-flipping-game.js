/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
var flipgame = function (fronts, backs) {
    let size = fronts.length;

    let isBoth = {};
    for (let i = 0; i < size; i++) {
        if (fronts[i] == backs[i]) {
            isBoth[fronts[i]] = true;
        }
    }

    let upLimit = 2001;

    let res = upLimit;

    for (let i = 0; i < size; i++) {
        if (!isBoth[fronts[i]]) {
            res = Math.min(res, fronts[i]);
        }
        if (!isBoth[backs[i]]) {
            res = Math.min(res, backs[i]);
        }
    }

    if (res == upLimit) {
        return 0;
    }
    return res;
};

let fronts = [1, 2, 4, 4, 7], backs = [1, 3, 4, 1, 3];
console.log(flipgame(fronts, backs));
