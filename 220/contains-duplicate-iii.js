/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
function containsNearbyAlmostDuplicate(nums, k, t) {
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j <= Math.min(i + k, len - 1); j++) {
            if (Math.abs(nums[i] - nums[j]) <= t) {
                return true;
            }
        }
    }
    return false;
}