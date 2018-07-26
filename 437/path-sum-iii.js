/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
function pathSum(root, sum) {
    if (!root)
        return 0;

    let ans = 0;

    function dfs(node, tmp) {
        tmp === sum && (ans++);
        node.left && dfs(node.left, tmp + node.left.val);
        node.right && dfs(node.right, tmp + node.right.val);
    }

    dfs(root, root.val);
    root.left && (ans += pathSum(root.left, sum));
    root.right && (ans += pathSum(root.right, sum));

    return ans;
}