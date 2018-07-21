/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    var ans = -Infinity
        , maxMul = 1
        , minMul = 1;

    nums.forEach(function (item) {
        var a = maxMul * item
            , b = minMul * item;

        maxMul = Math.max(a, b, 1);
        minMul = Math.min(a, b, 1);
        ans = Math.max(ans, a, b);
    });

    return ans;
};