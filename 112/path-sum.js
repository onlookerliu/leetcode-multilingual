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
 * @return {boolean}
 */
var hasPathSum = function (root, sum) {
    if (!root)
        return false;

    if (!root.left && !root.right) {
        if (root.val == sum)
            return true;
        return false;
    }

    let hasLeftPath, hasRightPath;
    if (root.left)
        hasLeftPath = hasPathSum(root.left, sum - root.val);

    if (root.right)
        hasRightPath = hasPathSum(root.right, sum - root.val);

    return !!(hasLeftPath || hasRightPath);
};