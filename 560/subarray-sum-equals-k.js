/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
function subarraySum(nums, k) {
    let res = 0, sum = 0, len = nums.length;
    let hash = {};
    hash[0] = 1;
    for (let i = 0; i < len; i++) {
        sum += nums[i];
        res += hash[sum - k] == undefined ? 0 : hash[sum - k];
        if (!hash[sum]) {
            hash[sum] = 1;
        } else {
            hash[sum]++;
        }
    }
    return res;
}