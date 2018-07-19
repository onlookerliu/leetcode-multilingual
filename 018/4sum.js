/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    let len = nums.length;
    let res = new Set();
    
    for (let i = 0; i < len-3; i++) {
        for (let j = i + 1; j < len - 2; j++) {
            let [left, right] = [j+1, len-1];
            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum == target) {
                    let tmp = [];
                    tmp.push(nums[i]); tmp.push(nums[j]); tmp.push(nums[left]); tmp.push(nums[right]);
                    if (!_contains(res, tmp))
                        res.push(tmp);
                    left += 1;
                    right -= 1;
                } else if (s < target) {
                    left += 1;
                } else {
                    right -= 1;
                }
            }
        }
    }
    return res;
};

// TODO: write the contains function

Array.prototype.contains = function(obj) {
    let i = this.length;
    while (i--) {
        let _obj = this[i];

        for (let [k, v] of _obj.entries()) {
            
        }
    }
    return false;
}

vendors = [
    {
        Name: 'Magenic',
        ID: 'ABC'
    },
    {
        Name: 'Microsoft',
        ID: 'DEF'
    }
];

if (vendors.some(e => e.name === 'Magenic')) {
    /* vendors contains the element we're looking for */
}