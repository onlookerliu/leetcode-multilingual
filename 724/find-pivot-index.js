/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    let suml = 0, sumr = 0, len = nums.length;

    for (let i = 0; i < len; i++) {
        sumr += nums[i];
    }
    for (let i = 0; i < len; i++) {
        if (i > 0) suml += nums[i - 1];
        sumr -= nums[i];
        if (suml === sumr) return i;
    }

    return -1;
};