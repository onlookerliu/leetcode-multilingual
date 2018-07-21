/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function (root) {
    let ans = [];

    function dfs(root, ans) {
        if (!root) return;

        dfs(root.left, ans);
        dfs(root.right, ans);
        ans.push(root.val);
    }

    dfs(root, ans);
    return ans;
};