/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    var sum = 0, i, length = nums.length;

    nums.sort(function (a, b) { return a - b; });
    for (i = 0; i < length; i++) {
        if (i % 2 === 0) sum += nums[i];
    }

    return sum;
};