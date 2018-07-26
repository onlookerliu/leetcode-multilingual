/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var convertBST = function (root) {
    let total = 0;
    function dfs(node) {
        if (!node) return;
        else {
            dfs(node.right);
            node.val += total;
            total = node.val;
            dfs(node.left);
        }
    }
    dfs(root);
    return root;
};