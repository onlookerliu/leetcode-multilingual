/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let maxn = -1;
    let ans = [];

    dfs(root, 0);
    function dfs(node, step) {
        if (!node)
            return;

        maxn = step > maxn ? step : maxn

        if (!ans[step])
            ans[step] = [];

        ans[step].push(node.val)

        dfs(node.left, step + 1);
        dfs(node.right, step + 1);
    }

    for (let i = 0; i < maxn; i++) {
        (i & 1) && (ans[i].reverse());
    }

    return ans;
};