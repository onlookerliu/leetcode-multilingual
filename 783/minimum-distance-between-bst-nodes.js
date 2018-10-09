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
var minDiffInBST = function (root) {

    let vals = [];
    function dfs(node) {
        if (!node) return;
        if (node.left)
            dfs(node.left);
        vals.push(node.val);
        if (node.right)
            dfs(node.right);
    }

    dfs(root);
    let minDiff = Infinity;
    for (let i = 1; i < vals.length; i++) {
        minDiff = Math.min(minDiff, vals[i] - vals[i - 1]);
    }
    return minDiff;
};