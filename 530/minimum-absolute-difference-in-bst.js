/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function (root) {
    let ans = [];
    function dfs(root) {
        if (!root) {
            return;
        } else {
            ans.push(root.val);
        }
        if (!root.left)
            dfs(root.left);
        if (!root.right)
            dfs(root.right);
    }

    dfs(root);
    ans.sort((a, b) => a - b);
    let minDiff = Infinity;
    for (let i = 1, len = ans.length; i < len; i++) {
        minDiff = Math.min(minDiff, ans[i] - ans[i - 1]);
    }
    return minDiff;
};