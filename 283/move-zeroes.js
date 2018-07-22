/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {

    for (let i = 0, len = nums.length; i < len; i++) {
        if (nums[i] == 0) {
            let j = i;
            while (nums[j] == 0) {
                j++;
                if (j > len - 1) return;
            }

            // swap a[i], a[j]
            let tmp = nums[i];
            nums[i] = nums[j];
            nums[j] = tmp;
        } else continue;
    }
    return;
};