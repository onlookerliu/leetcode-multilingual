/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
function multiply(num1, num2) {
    if (num1 == null || num2 == null) {
        return "";
    }
    let paper = [];
    let len = num1.length + num2.length;
    let _num1 = num1.split("");
    let _num2 = num2.split("");

    for (let i = 0; i < _num1.length; i++) {
        for (let j = 0; j < _num2.length; j++) {
            paper[len - (i + j + 2)] += (_num1[i] - '0') * (_num2[j] - '0');
        }
    }

    for (let i = 0; i < len - 1; i++) {
        paper[i + 1] += (paper[i] - paper[i] % 10) / 10;
        paper[i] %= 10;
    }

    let s = "";
    for (let i = len - 1; i > 0; i--) {
        if ("" == s && paper[i] == 0) {
            continue;
        }
        s += paper[i];
    }
    s += paper[0];

    return s;
}