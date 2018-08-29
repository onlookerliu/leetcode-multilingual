/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number}
 */
var minPatches = function (nums, n) {
    let max = 1;
    let count = 0;
    let i = 0;
    while (max <= n) {
        if (i < nums.length && nums[i] <= max) {
            max += nums[i];
            i++;
        } else {
            max <<= 1;
            count++;
        }
    }

    return count;
};