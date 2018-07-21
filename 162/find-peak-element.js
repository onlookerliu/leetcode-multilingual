/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    let len = nums.length;
    nums[-1] = nums[len] = -Infinity;

    for (let i = 0; i < len; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1])
            return i;
    }
};