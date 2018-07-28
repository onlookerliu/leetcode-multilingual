/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
    let i, j, len = nums.length;
    for (i = len - 2; i >= 0; i--) {
        if (nums[i+1] > nums[i]) {
            for (j = len - 1; j > i; j--) {
                if (nums[j] > nums[i]) break;
            }
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            for (let k = i+1; k < (len+i)/2; k++) {
                // swap nums[k], nums[len-k+i]
                temp = nums[k];
                nums[k] = nums[len-k+i];
                nums[len-k+i] = temp;
            }
            // nums = [...nums.slice(0, i+1) , ...nums.slice(i+1).reverse()];
            return;
        }
    }
    nums.reverse();
};

let nums = [1, 3, 2];
nextPermutation(nums);
console.log(nums);
