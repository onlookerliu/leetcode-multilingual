/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {
    let len = nums.length;
    if (len == 0)
        return 0;
    let i = 0;
    for (let j = 0; j < len; j++) {
        if (nums[j] != nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}