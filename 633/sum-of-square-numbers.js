/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    let mid = ~~(Math.sqrt(c));

    for (let i = 0; i <= mid; i++) {
        let rem = c - i * i;
        let SQRT = ~~(Math.sqrt(rem));
        if (rem == SQRT ** 2) {
            return true;
        }
    }
    return false;
}