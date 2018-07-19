/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function (findNums, nums) {
    let hash = [];
    for (let [i, num] of nums.entries()) {
        hash[num] = i;
    }

    let res = [];

    let len1 = findNums.length;
    let len2 = nums.length;
    for (let i = 0; i < len1; i++) {
        let exist = false;

        for (let j = hash[findNums[i]]; j < len2; j++) {
            if (nums[j] > findNums[i]) {
                res.push(nums[j]);
                exist = true;
                break;
            }
        }

        if (!exist) {
            res.push(-1);
        }
    }
    return res;
};