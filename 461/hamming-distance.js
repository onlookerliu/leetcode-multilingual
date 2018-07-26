/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function hammingDistance(x, y) {
    var z = x ^ y;
    var count = 0;
    while (z > 0) {
        var tmp = z % 2;
        if (1 == tmp) {
            count++;
        }
        z = (z - tmp) / 2;
    }
    return count;
}