/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    let combination = [];
    let res = [];

    function dfs(idx, begin) {
        if (idx == k) {
            res.push(combination.map(i => i));
            return;
        }
        for (let i = begin; i <= n+1-k+idx; i++) {
            combination[idx] = i;
            dfs(idx+1, i+1);
        }
    }

    dfs(0, 1);
    return res;
};

let [n, k] = [4, 2];
console.log(combine(n, k));
