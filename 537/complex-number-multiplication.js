/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function (c1, c2) {
    const { re: a, im: b } = destructuring(c1);
    const { re: c, im: d } = destructuring(c2);

    return `${a * c - b * d}+${a * d + b * c}i`;
};

const destructuring = function (c) {
    let ss = c.split("+");
    let re = parseInt(ss[0]);
    let im = parseInt(ss[1].slice(0, ss[1].length - 1));
    return { re: re, im: im };
}