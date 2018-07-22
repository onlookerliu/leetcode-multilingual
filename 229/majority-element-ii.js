/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let len = nums.length;
    let third = Math.floor(len / 3);
    let hash = {};
    let ans = [];

    for (let i = 0; i < len; i++) {
        let item = nums[i];
        if (!hash[item]) {
            hash[item] = 1;
        } else {
            hash[item]++;
        }
    }

    for (let item in hash) {
        if (hash[item] > third)
            ans.push(Number(item));
    }
    return ans;
};