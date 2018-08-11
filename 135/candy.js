/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let len = ratings.length;
    if (len <= 1)
        return len;

    let left = new Array(len).fill(0);
    let right = new Array(len).fill(0);

    left[0] = 1;
    right[len-1] = 1;

    for (let i = 1; i < len; i++) {
        if (ratings[i-1] < ratings[i]) {
            left[i] = left[i-1] + 1;
        } else {
            left[i] = 1;
        }

        if (ratings[len-i-1] > ratings[len-i]) {
            right[len-i-1] = right[len-i] + 1;
        } else {
            right[len-i-1] = 1;
        }
    }

    let res = 0;
    for (let i = 0; i < len; i++) {
        res += Math.max(left[i], right[i]);
    }

    return res;
};