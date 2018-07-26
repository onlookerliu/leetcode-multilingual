/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    let res = [];
    if (n == 0) {
        return res;
    }

    for (let i = 0; i < n; i++) {
        let [fizzQ, buzzQ] = [(i + 1) % 3, (i + 1) % 5];

        if (!fizzQ && !buzzQ) {
            res.push("FizzBuzz");
        } else if (!fizzQ) {
            res.push("Fizz");
        } else if (!buzzQ) {
            res.push("Buzz");
        } else {
            res.push(`${i + 1}`);
        }
    }
    return res;
};