/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let hash = {};
    let len = nums.length;
    let half = len >> 1;
    for (let i = 0; i < len; i++) {
        let item = nums[i];
        if (!hash[item]) {
            hash[item] = 1;
        } else {
            hash[item]++;
        }
        if (hash[item] > half) {
            return item;
        }
    }
};