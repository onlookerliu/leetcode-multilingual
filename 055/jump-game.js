/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    function canJumpUtil(i, len, farthest) {
        if (i == len - 1)
            return farthest >= i;
        else if (farthest < i)
            return false;
        else if (i + nums[i] > farthest)
            return canJumpUtil(i + 1, len, i + nums[i])
        else return canJumpUtil(i + 1, len, farthest)
    }

    return canJumpUtil(0, nums.length, 0);
};

var canJump = function (nums) {
    var rightMost = 1;
    for (var i = 0, len = nums.length; i < len; i++) {
        if (rightMost < i + 1) break;
        rightMost = Math.max(rightMost, i + 1 + nums[i]);
    }
    return rightMost >= len;
};

var canJump = function(nums) {
    let reach = 0;
    let len = nums.length
    for (let i = 0; i < len; i++) {
        // 如果当前坐标大于reach或者reach已经抵达最后一个位置则跳出循环，否则就更新reach的值为其和i + nums[i]中的较大值，其中i + nums[i]表示当前位置能到达的最大位置
        if (i > reach || reach >= len - 1) break;
        reach = Math.max(reach, i + nums[i]);
    }
    return reach >= len - 1;
};