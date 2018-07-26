/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
function findLUSlength(a, b) {
    let lena = a.length;
    let lenb = b.length;

    if (lena > lenb) {
        return lena;
    } else if (lena < lenb) {
        return lenb;
    } else if (a != b) {
        return lena;
    } else {
        return -1;
    }
}