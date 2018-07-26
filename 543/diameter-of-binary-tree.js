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
var diameterOfBinaryTree = function (root) {
    let res = 0;

    function dfs(root) {
        if (!root) return 0;
        let l = dfs(root.left);
        let r = dfs(root.right);
        res = Math.max(res, l + r);
        return Math.max(l, r) + 1;
    }

    dfs(root);
    return res;
}