/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    if (b == 0)
        return a;
    return getSum(a ^ b, (a & b) << 1);
};

// console.log(getSum(1, 2));
console.log(getSum(1, -1));
console.log(getSum(3 ,4));
console.log(getSum(3, 5));
console.log(getSum(10, 30));
