/**
 * @param {number[]} candies
 * @return {number}
 */
function distributeCandies(candies) {
    if (candies & 1)
        return 0;
    let kind = [...new Set(candies)].length;
    let half = candies.length >> 1;
    if (kind >= half) {
        return half;
    } else {
        return kind;
    }
}