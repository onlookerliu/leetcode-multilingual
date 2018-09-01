/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
    let countDashs = 0;
    for (let char of s) {
        if (char == '-')
            countDashs++;
    }

    let countAN = s.length - countDashs

    if (countAN == 0)
        return "";

    s = s.replace(/-/g, "");
    s = s.toUpperCase();

    // (countAN+k-1)/k - 1 是 res 中 '-' 的个数
    let res = new Array(Math.floor((countAN + k - 1) / k) - 1 + countAN).fill(0);

    let [i, j] = [res.length, s.length];
    while (0 <= j - k) {
        for (let idx = i - k; idx < i; idx++) {
            res[idx] = s[idx - (i - j)];
        }

        if (0 <= i - k - 1) {
            res[i - k - 1] = '-';
        }

        i -= k + 1;
        j -= k;
    }

    if (j > 0) {
        for (let idx = 0; idx < j; idx++) {
            res[idx] = s[idx];
        }
    }

    return res.join("")
};

let s = "5F3Z-2e-9-w";
let k = 4;
console.log(licenseKeyFormatting(s, k));