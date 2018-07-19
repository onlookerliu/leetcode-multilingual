/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let pos = nums.indexOf(target);
    if (pos !== -1) return pos;

    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] > target) {
            return i;
        } else continue;
    }
    return len;
};