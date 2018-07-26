/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b);
    let len = nums.length;
    let maxProduct = nums[len - 1] * nums[len - 2] * nums[len - 3];
    maxProduct = Math.max(maxProduct, nums[len - 1] * nums[0] * nums[1]);
    maxProduct = Math.max(maxProduct, nums[0] * nums[1] * nums[2]);
    return maxProduct;
}