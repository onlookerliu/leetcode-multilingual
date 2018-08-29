/**
 * @param {number} n
 * @return {number}
 */
var bulbSwitch = function (n) {
    return intSqrt(n);
};

var intSqrt = function (x) {
    let root = x;
    while (root * root > x) {
        root = Math.floor((root + x / root) / 2);
    }
    return root;
};

let n = 3;
console.log(bulbSwitch(n));