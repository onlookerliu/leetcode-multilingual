/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = [];
    function dfs(num, start, res) {
        if (start >= num.length) res.push(num.map(i => i));
        for (let i = start; i < num.length; i++) {
            // swap num[start], num[i]
            let temp1 = num[i];
            num[i] = num[start];
            num[start] = temp1;
            dfs(num, start + 1, res);
            // swap num[start], num[i]
            let temp2 = num[i];
            num[i] = num[start];
            num[start] = temp2;
        }
    };
    dfs(nums, 0, res);
    return res;
};


function permute(nums) {
    let res = [];
    let out = [];
    let visited = {};

    function dfs(nums, level, visited, out, res) {
        if (level == nums.length) {
            res.push(out.map(i => i));
            return;
        } else {
            for (let i = 0; i < nums.length; i++) {
                if (!visited[i]) {
                    visited[i] = true;
                    out.push(nums[i]);
                    dfs(nums, level+1, visited, out, res);
                    out.pop();
                    visited[i] = false;
                }
            }
        }
    }

    dfs(nums, 0, visited, out, res);
    return res;
}