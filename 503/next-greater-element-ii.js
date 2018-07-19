/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function (nums) {
    let len = nums.length;
    let ans = [];
    for (let i = 0; i < len; i++) {
        let j = i + 1;
        let found = false;
        while (j != i) {
            if (nums[j] > nums[i]) {
                found = true;
                ans.push(nums[j]);
                break;
            }
            j = (j + 1) % len;
        }
        if (!found) {
            ans.push(-1);
        }
    }
    return ans;
};