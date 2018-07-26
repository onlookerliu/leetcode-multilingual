/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayNesting = function (nums) {
    let len = nums.length;
    let res = [];
    let hash = [];

    for (let i = 0; i < len; i++) {
        let count = 0;
        if (hash[i])
            continue;
        for (let start = i; ; start = nums[start]) {
            if (!hash[nums[start]]) {
                hash[nums[start]] = true;
                count++;
            } else {
                break;
            }
        }
        res.push(count);
    }
    return Math.max(...res);
};