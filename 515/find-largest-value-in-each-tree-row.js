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
var largestValues = function (root) {
    let res = [];
    const getMax = (a, b = -Infinity) => Math.max(a, b);
    const dfs = (node, depth) => {
        if (!node) return;
        res[depth] = getMax(node.val, res[depth]);
        dfs(node.left, depth + 1);
        dfs(node.right, depth + 1);
    };

    dfs(root, 0);
    return res;
};