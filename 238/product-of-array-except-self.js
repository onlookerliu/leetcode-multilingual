/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let l = nums.length;
    let left = new Array(l).fill(1);
    let right = new Array(l).fill(1);

    left[1] = nums[0];
    right[l - 2] = nums[l - 1];

    for (let i = 2; i < l; i++) {
        left[i] = nums[i - 1] * left[i - 1];
        right[l - i - 1] = nums[l - i] * right[l - i];
    }

    let res = new Array(l);
    for (let i = 0; i < l; i++) {
        res[i] = left[i] * right[i];
    }

    return res;
};