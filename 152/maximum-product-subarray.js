// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var maxProduct = function (nums) {
//     var ans = -Infinity
//         , maxMul = 1
//         , minMul = 1;

//     nums.forEach(function (item) {
//         var a = maxMul * item
//             , b = minMul * item;

//         maxMul = Math.max(a, b, 1);
//         minMul = Math.min(a, b, 1);
//         ans = Math.max(ans, a, b);
//     });

//     return ans;
// };


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let res = -Infinity;
    let [neg, pos] = [1, 1];

    for (let num of nums) {
        let [negMul, posMul] = [neg * num, pos * num];
        pos = Math.max(posMul, negMul, 1);
        neg = Math.min(negMul, posMul, 1);
        res = Math.max(res, negMul, posMul);
    }
    return res;
};


let nums = [-2, 0, -1];
console.log(maxProduct(nums));
