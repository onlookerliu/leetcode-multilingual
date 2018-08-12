/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
    let res = [];
    let n = nums.length;

    if (!n) return res;

    let begin = nums[0];
    let str;

    for (let i = 0; i < n; i++) {
        if (i == n-1 || nums[i]+1 != nums[i+1]) {
            if (nums[i] == begin) {
                str = `${begin}`;
            } else {
                str = `${begin}->${nums[i]}`;
            }

            if (i+1 < n) {
                begin = nums[i+1];
            }

            res.push(str);
        }
    }

    return res;
};