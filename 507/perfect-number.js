/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
    if (num == 1)
        return false;

    let sum = 1;
    let bound = ~~Math.sqrt(num);

    for (let i = 2; i <= bound; i++) {
        if (num % i == 0)
            sum += i + num / i;
    }

    return sum == num;
};

let num = 28;
console.log(checkPerfectNumber(num));
