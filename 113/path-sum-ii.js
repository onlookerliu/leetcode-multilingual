/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
    let ans = [];
    let tmp = [];

    function dfs(root, sum) {
        if (!root)
            return;

        tmp.push(root.val);
        if (!root.left && !root.right) {
            if (root.val === sum) {
                let res = tmp.map(item => item);
                ans.push(res);
            }
            return;
        }
        if (root.left) {
            dfs(root.left, sum - root.val);
            tmp.pop();
        }
        if (root.right) {
            dfs(root.right, sum - root.val);
            tmp.pop();
        }
    }
    dfs(root, sum);
    return ans;
};