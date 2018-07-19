/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    a = a.split('').reverse();
    b = b.split('').reverse();

    let c = [];
    let carry = 0;
    let len = Math.max(a.length, b.length);

    for (let i = 0; i < len; i++) {
        let sum = (a[i] === undefined ? 0 : Number(a[i])) + (b[i] === undefined ? 0 : Number(b[i])) + carry;
        c[i] = sum & 1;
        carry = sum >= 2 ? 1 : 0;
    }

    if (carry) {
        c[len] = 1;
    }

    return c.reverse().join('').toString();
};