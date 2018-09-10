/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function (s) {
    let [left, max] = [0, 0];
    let len = s.length;
    let temp = 0;

    let record = new Array(len).fill(0);
    for (let i = 0; i < len; i++) {
        let char = s[i];
        if (char == '(') {
            left++;
        } else if (left > 0) {
            left--;
            record[i] = 2;
        }
    }

    for (let i = 0; i < len; i++) {
        if (record[i] == 2) {
            let j = i - 1;
            while (record[j] != 0) {
                j--;
            }
            record[i] = 1;
            record[j] = 1;
        }
    }

    for (let i = 0; i < len; i++) {
        let r = record[i];
        if (r == 0) {
            temp = 0;
            continue;
        }
        temp++;
        if (temp > max) {
            max = temp;
        }
    }

    return max;
};