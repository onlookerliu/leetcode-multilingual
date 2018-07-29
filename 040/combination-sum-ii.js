/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b);
    let res = [];
    let out = [];

    function combinationSumHelper(candidates, target, start, out, res) {
        if (target < 0) return;
        else if (target == 0) res.push(out.map(i => i));
        else {
            for (let i = start; i < candidates.length; i++) {
                if (i > start && candidates[i] == candidates[i-1]) continue;
                out.push(candidates[i]);
                combinationSumHelper(candidates, target - candidates[i], i + 1, out, res);
                out.pop();
            }
        }
    };

    combinationSumHelper(candidates, target, 0, out, res);
    return res;
}

let candidates = [2, 5, 2, 1, 2], target = 5;
console.log(combinationSum2(candidates, target));