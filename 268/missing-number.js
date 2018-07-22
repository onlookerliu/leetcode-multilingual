/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let hash = [];
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        hash[nums[i]] = true;
    }

    for (let j = 0; ; j++) {
        if (!hash[j])
            return j;
    }
};

var missingNumber = function (nums) {
    let sum = 0;
    for (let i = 0; i <= nums.length; i++) {
        sum ^= i;
    }
    return nums.reduce((x, y) => x ^ y, sum);
};