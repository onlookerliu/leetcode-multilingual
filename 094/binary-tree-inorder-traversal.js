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
var inorderTraversal = function (root) {
    function dfs(root, ans) {
        if (!root) return;

        dfs(root.left, ans);
        ans.push(root.val);
        dfs(root.right, ans);
    }

    let ans = [];
    dfs(root, ans);
    return ans;
};