/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var search = function (nums, target) {
    let [low, high] = [0, nums.length - 1];
    let mid;
    while (low <= high) {
        mid = (low + high) >> 1;
        if (nums[mid] < target) {
            low = mid + 1;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else return mid;
    }
    return -1;
};

var searchRange = function (nums, target) {
    let index = search(nums, target);
    if (index == -1)
        return [-1, -1];

    let first = index;
    while (true) {
        let firstCandidate = search(nums.slice(0, first), target);
        if (firstCandidate == -1) break;
        first = firstCandidate;
    }

    let last = index;
    while (true) {
        let lastCandidate = search(nums.slice(last+1), target);
        if (lastCandidate == -1) break;
        last += lastCandidate + 1;
    }

    return [first, last];
};


let nums = [5, 7, 7, 8, 8, 10], target = 8;
console.log(searchRange(nums, target));
