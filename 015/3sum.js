/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b);

    let res = [];
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (i && nums[i] == nums[i - 1])
            continue;
        let target = -nums[i];
        let [left, right] = [i + 1, len - 1];
        while (left < right) {
            let sum = nums[left] + nums[right];
            if (sum > target) {
                right--;
            } else if (sum < target) {
                left++;
            } else {
                res.push([nums[i], nums[left], nums[right]]);
                while (nums[left] == nums[left + 1])
                    left++;
                left++;
                while (nums[right] == nums[right - 1])
                    right--;
                right--;
            }
        }
    }

    return res;
};