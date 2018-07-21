/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (!nums.length)
        return 0;

    let hash = [];
    nums.forEach(item => hash[item] = true);

    let ans = -Infinity;
    nums.forEach((item, idx) => {
        if (!hash[item + 1]) {
            // search downhill
            let count = 0, index = item;
            while (hash[index]) {
                count++;
                index--;
            }
            ans = Math.max(ans, count);
        }
    });

    return ans;
};