/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
    let len = words.length;
    let masks = new Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        for (let j = 0, s = words[i].length; j < s; j++) {
            masks[i] |= (1 << (words[i].charCodeAt(j) - 97));
        }
    }

    let max = 0;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            if ((masks[i] & masks[j]) != 0) continue;
            let temp = words[i].length * words[j].length;
            if (max < temp) max = temp;
        }
    }

    return max;
};

let words = ["abcw", "baz", "foo", "bar", "xtfn", "abcdef"];
console.log(maxProduct(words));