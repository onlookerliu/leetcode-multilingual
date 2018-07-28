/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let res = [];
    let out = [];
    let visited = {};
    nums.sort();

    function dfs(nums, level, visited, out, res) {
        if (level >= nums.length) res.push(out.map(i => i));
        else {
            for (let i = 0; i < nums.length; i++) {
                if (!visited[i]) {
                    if (i > 0 && nums[i] == nums[i-1] && !visited[i-1]) {
                        visited[i] = true;
                        out.push(nums[i]);
                        dfs(nums, level+1, visited, out, res);
                        out.pop();
                        visited[i] = false;
                    }
                }
            }
        }
    };

    dfs(nums, 0, visited, out, res);
    return res;
};