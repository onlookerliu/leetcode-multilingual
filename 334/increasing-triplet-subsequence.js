/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let max = Infinity;
    let [ai, aj] = [max, max];

    for (let ak of nums) {
        if (ak <= ai) {
            ai = ak;
        } else if (ak <= aj) {
            aj = ak;
        } else {
            return true;
        }
    }

    return false;
};