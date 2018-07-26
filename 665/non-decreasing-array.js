/**
 * @param {number[]} nums
 * @return {boolean}
 */

function checkPossibility(nums) {
    if (nums.length < 3) {
        return true;
    }

    let count = 0;
    if (nums[0] > nums[1]) {
        count++;
        nums[0] = nums[1];
    }

    for (let i = 1; i < nums.length && count < 2; i++) {
        if (nums[i - 1] > nums[i]) {
            if (nums[i] > nums[i - 2]) {
                nums[i - 1] = nums[i - 2];
            } else {
                nums[i] = nums[i - 1];
            }
            count++;
        }
    }
    return count < 2;
}