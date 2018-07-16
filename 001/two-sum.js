/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(numbers, target) {
    let hash = {};
    for (let i = 0, len = numbers.length; i < len; i++) {
        let item = numbers[i];
        if (!hash[item]) {
            hash[target - item] = i;
        } else {
            let index = hash[item];
            if (index < i)
                return [index, i];
        }
    }
    return [-1, -1];
}