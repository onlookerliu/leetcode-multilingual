/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    let len = nums.length;
    if (len == 0) {
        return 0;
    }
    for (let i = 0; i < len; i++) {
        if (nums[i] == val) {
            nums.splice(i, 1);
            i = i - 1;
        }
    }
    return nums.length;
};