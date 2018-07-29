/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let maxIndex = 0;
    let n = nums.length;

    if (!n) return -1;
    while (maxIndex + 1 < n && nums[maxIndex] < nums[maxIndex + 1]) {
        maxIndex++;
    }

    let [left, right, mid] = [0, n-1, 0];
    while (left <= right) {
        mid = (left + right) >> 1;

        // right shift `maxIndex` units on the original array
        let index = mid + maxIndex + 1;
        if (index >= n) {
            index -= n;
        }
        if (nums[index] > target) {
            right = mid - 1;
        } else if (nums[index] < target) {
            left = mid + 1;
        } else return index;
    }
    return -1;
};

let nums = [4, 5, 6, 7, 0, 1, 2], target = 0;
console.log(search(nums, target));
