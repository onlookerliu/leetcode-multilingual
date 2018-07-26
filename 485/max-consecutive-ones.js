/**
 * @param {number[]} nums
 * @return {number}
 */
function findMaxConsecutiveOnes(nums) {
    let len = nums.length;
    if (len == 0)
        return 0;

    let maxConsecutiveOnes = 0;
    for (let i = 0; i < len;) {
        if (nums[i] == 0) {
            i++;
            continue;
        } else {
            let consecutiveOnes = 0;
            while (nums[i] == 1) {
                consecutiveOnes++;
                i++;
            }
            if (consecutiveOnes > maxConsecutiveOnes) {
                maxConsecutiveOnes = consecutiveOnes;
            }
        }
    }
    return maxConsecutiveOnes;
}