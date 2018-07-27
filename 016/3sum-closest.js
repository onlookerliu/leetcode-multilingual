/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let len = nums.length;
    let closest = nums[0] + nums[1] + nums[2];
    let diff = Math.abs(closest - target);
    nums.sort((a, b) => a - b);
    for (let i = 0; i < len; i++) {
        let [l, r] = [i + 1, len - 1];
        while (l < r) {
            let sum = nums[i] + nums[l] + nums[r];
            let newDiff = Math.abs(sum - target);
            if (diff > newDiff) {
                diff = newDiff;
                closest = sum;
            }
            if (sum < target)
                l++;
            else
                r--;
        }
    }
    return closest;
};