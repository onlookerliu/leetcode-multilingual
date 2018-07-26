/**
 * @param {number[]} A
 * @return {number}
 */
var longestMountain = function (A) {
    let len = A.length;
    let peak;
    let res = [];

    for (let i = 1; i < len - 1; i++) {
        if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
            peak = i;
            res.push(downhill(peak, A));
        } else {
            continue;
        }
    }

    if (!peak) {
        return 0;
    } else {
        return Math.max(...res);
    }
};

function downhill(peak, arr) {
    let left = peak;
    let right = peak;

    while (arr[left] > arr[left - 1]) {
        left--;
    }
    while (arr[right] > arr[right + 1]) {
        right++;
    }
    return right - left + 1;
}