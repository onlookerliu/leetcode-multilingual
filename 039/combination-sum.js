/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
    candidates.sort((a, b) => a - b);
    let res = [];
    let out = [];

    function combinationSumHelper(candidates, target, start, out, res) {
        if (target < 0) return;
        else if (target == 0) res.push(out.map(i => i));
        else {
            for (let i = start; i < candidates.length; i++) {
                out.push(candidates[i]);
                combinationSumHelper(candidates, target - candidates[i], i, out, res);
                out.pop();
            }
        }
    };

    combinationSumHelper(candidates, target, 0, out, res);
    return res;
}

let candidates = [2, 3, 6, 7], target = 7;
console.log(combinationSum(candidates, target));