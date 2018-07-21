/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let removeDuplicate = [...new Set(nums)];
    return removeDuplicate.length != nums.length;
};