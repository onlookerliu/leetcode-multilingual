/**
 * @param {number} n
 * @return {number}
 */
function trailingZeroes(n) {
    if (n / 5 < 5) {
        return Math.floor(n / 5);
    }
    return Math.floor(n / 5) + trailingZeroes(Math.floor(n / 5));
}

