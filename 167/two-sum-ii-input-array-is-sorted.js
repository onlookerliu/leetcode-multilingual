/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let hash = {};
    for (let i = 0, len = numbers.length; i < len; i++) {
        let item = target - numbers[i];
        if (hash[item] === undefined) {
            hash[numbers[i]] = i;
            continue;
        }
        return [hash[item] + 1, i + 1];
    }
};

var twoSum = function (numbers, target) {
    let i = 1, j = numbers.length;
    while (i < j) {
        if (numbers[i - 1] + numbers[j - 1] === target) {
            return [i, j];
        } else if (numbers[i - 1] + numbers[j - 1] > target) {
            j--;
        } else {
            i++;
        }
    }
};