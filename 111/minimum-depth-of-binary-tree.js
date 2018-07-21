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
function minDepth(root) {
    let ans = 0;

    function dfs(root, depth) {
        if (!root)
            return;

        if (ans && depth >= ans)
            return;

        if (!root.left && !root.right) {
            ans = depth;
            return;
        }

        if (root.left)
            dfs(root.left, depth + 1);
        if (root.right)
            dfs(root.right, depth + 1);
    }

    dfs(root, 1);
    return ans;
}