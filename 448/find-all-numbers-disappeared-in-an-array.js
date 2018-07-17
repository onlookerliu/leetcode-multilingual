/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let ans = [];
    let st = new Set(nums);
    for (let i = 0, n = nums.length; i < n; i++) {
        if (!st.has(i + 1))
            ans.push(i + 1);
    }
    return ans;
};

var findDisappearedNumbers = function (nums) {
    let len = nums.length;
    let hash = {};
    let ans = [];

    nums.forEach(function (item) {
        hash[item] = true;
    });

    for (let i = 1; i <= len; i++)
        !hash[i] && ans.push(i);

    return ans;
};