/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
    let maxAverage = -Infinity;
    let n = nums.length;
    for (let start = 0; start <= n - k; start++) {
        let sum = 0;
        for (let i = start; i < start + k; i++) {
            sum += nums[i];
        }
        if (sum / k > maxAverage) {
            maxAverage = sum / k;
        }
    }
    return maxAverage;
};