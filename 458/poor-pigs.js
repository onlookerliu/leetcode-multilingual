/**
 * @param {number} buckets
 * @param {number} minutesToDie
 * @param {number} minutesToTest
 * @return {number}
 */
var poorPigs = function (buckets, minutesToDie, minutesToTest) {
    let base = minutesToTest / minutesToDie + 1;
    let power = 1;
    let res = 0;

    while (power < buckets) {
        power *= base;
        res++
    }

    return res;
};