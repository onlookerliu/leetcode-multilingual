/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    const m = { '2': ["a", "b", "c"], '3': ["d", "e", "f"], '4': ["g", "h", "i"], '5': ["j", "k", "l"], '6': ["m", "n", "o"], '7': ["p", "q", "r", "s"], '8': ["t", "u", "v"], '9': ["w", "x", "y", "z"] };

    const len = digits.length;
    let ret = [""];
    if (len == 0)
        return [];

    for (let i = 0; i < len; i++) {
        let temp = [];
        for (let j = 0; j < ret.length; j++) {
            for (let k = 0; k < m[digits[i]].length; k++) {
                temp.push(ret[j] + m[digits[i]][k]);
            }
        }

        ret = temp;
    }

    return ret;
};

let digits = "23";
console.log(letterCombinations(digits));

