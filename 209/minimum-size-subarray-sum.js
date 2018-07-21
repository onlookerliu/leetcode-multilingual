/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
    let len = nums.length;
    let minLen = Infinity;
    let start, end;
    for (start = 0; start < len; start++) {
        let sum = nums[start];
        for (end = start + 1; end <= len; end++) {
            if (sum < s) {
                sum += nums[end];
                continue;
            } else {
                minLen = Math.min(minLen, end - start);
            }
        }
    }
    return minLen == Infinity ? 0 : minLen;
};