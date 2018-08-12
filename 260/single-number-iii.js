/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
    let xor = 0;
    for (let num of nums)
        xor ^= num;

    let lowest = xor & -xor;
    let [a, b] = [0, 0];

    for (let num of nums) {
        if (num & lowest) {
            a ^= num;
        } else {
            b ^= num;
        }
    }

    return [a, b];
};