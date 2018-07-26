/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    let ans = [];
    for (let i = 0, len = nums.length; i < len; i++) {
        let item = nums[i];
        let val = Math.abs(item) - 1;

        if (nums[val] < 0) {
            ans.push(val + 1);
        } else {
            nums[val] *= -1;
        }
    }

    return ans;
};