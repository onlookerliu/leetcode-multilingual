/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    let len = nums.length;
    for (let i = 0; i < len - 1; i++) {
        let item = nums[i];
        for (let j = i + 1; j < len; j++) {
            if (nums[j] == item && j - i <= k) {
                return true;
            } else {
                continue;
            }
        }
    }
    return false;
};