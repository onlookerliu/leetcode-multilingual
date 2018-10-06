/**
 * @param {number[]} nums
 * @return {boolean}
 */
var PredictTheWinner = function (nums) {
    let getScore = function (nums, l, r) {
        if (l == r) return nums[l];
        return Math.max((nums[l] - getScore(nums, l + 1, r)), (nums[r] - getScore(nums, l, r - 1)));
    };
    return getScore(nums, 0, nums.length - 1) >= 0;
};