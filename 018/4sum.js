/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    let len = nums.length;
    let res = [];

    for (let i = 0; i < len - 3; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < len - 2; j++) {
            if (j > i + 1 && nums[j] == nums[j - 1]) {
                continue;
            }

            let [left, right] = [j + 1, len - 1];
            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum == target) {
                    let tmp = [nums[i], nums[j], nums[left], nums[right]];
                    // tmp.push(nums[i]);
                    // tmp.push(nums[j]);
                    // tmp.push(nums[left]);
                    // tmp.push(nums[right]);
                    res.push(tmp);
                    [left, right] = next(nums, left, right);
                } else if (sum < target) {
                    left += 1;
                } else {
                    right -= 1;
                }
            }
        }
    }
    return res;
};

// find the next suitable left and right value
const next = function (nums, left, right) {
    while (left < right) {
        if (nums[left] == nums[left + 1]) {
            left++;
        } else if (nums[right] == nums[right - 1]) {
            right--;
        } else {
            left++;
            right--;
            return [left, right];
        }
    }
    return [left, right];
};
