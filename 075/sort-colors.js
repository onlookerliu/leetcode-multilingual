/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    let len = nums.length;
    if (!len) return;

    let temp = nums[0];
    nums[0] = 1;

    let [i, j, k] = [0, 1, len-1];

    while (j <= k) {
        if (nums[j] < 1) {
            let swap = nums[i];
            nums[i] = nums[j];
            nums[j] = swap;
            i++;
            j++;
        } else if (1 < nums[j]) {
            let swap = nums[j];
            nums[j] = nums[k];
            nums[k] = swap;
            k--;
        } else {
            j++;
        }
    }

    if (temp == 0) {
        nums[i] = temp;
    } else if (temp == 2) {
        nums[k] = temp;
    }
    return;
};