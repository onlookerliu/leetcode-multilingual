/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    let balanced = true;

    function dfs(root) {
        if (!root)
            return;
        let l_height = root.left ? dfs(root.left) : 0;
        let r_height = root.right ? dfs(root.right) : 0;

        if (Math.abs(l_height - r_height) > 1)
            balanced = false;

        return Math.max(l_height, r_height) + 1;
    }

    dfs(root);
    return balanced;
};