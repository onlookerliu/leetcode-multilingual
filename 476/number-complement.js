/**
 * @param {number} num
 * @return {number}
 */
function findComplement(num) {
    let copy = num;
    let res = 0;
    while (copy > 0) {
        res = res * 2 + 1;
        copy = copy >> 1;
    }

    return res ^ num;
}