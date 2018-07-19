/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    let res = [];
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        let arr = [];
        let next = nextSum(nums, i);
        let j = len - i;
        while (j) {
            arr.push(next());
            j--;
        }
        res.push(Math.max(...arr));
    }
    return Math.max(...res);
};

function nextSum(nums, start) {
    let sum = 0;
    return () => {
        sum += nums[start];
        start++;
        return sum;
    };
}


var maxSubArray = function (nums) {
    let max = nums[0];
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            sum = sum + nums[j];
            if (sum >= max) {
                max = sum;
            }
        }
        sum = 0;
    }
    return max;
};

let maxSubArray = function (nums) {
    let len = nums.length;
    let max = nums[0];
    let dp = nums[0];
    for (let i = 1; i < len; i++) {
        dp = Math.max(dp + nums[i], nums[i]);
        max = Math.max(max, dp);
    }
    return max;
};

var maxSubArray = function (nums) {
    let res = -Infinity;
    nums.reduce((acc, num) => {
        let t = acc < 0 ? num : (acc + num);
        res = Math.max(res, t);
        return t;
    }, 0);
    return res;
};