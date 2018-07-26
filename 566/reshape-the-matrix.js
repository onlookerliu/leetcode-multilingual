/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
    let [rows, columns] = [nums.length, nums[0].length];
    if (r * c !== rows * columns) return nums;

    let ans = [...Array(r)].map(e => Array(c));
    for (let i = 0; i < r; i++) {
        for (let j = 0; j < c; j++) {
            let k = i * c + j;
            let colIndex = k % columns;
            let rowIndex = (k - colIndex) / columns;
            ans[i][j] = nums[rowIndex][colIndex];
        }
    }
    return ans;
};