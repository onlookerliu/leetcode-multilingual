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
var findSecondMinimumValue = function (root) {
    const intMax = Infinity;
    let res = intMax;

    var helper = function (root, lo) {
        if (!root)
            return;
        if (lo < root.val && root.val < res) {
            res = root.val
        }

        helper(root.left, lo, res);
        helper(root.right, lo, res);
    };

    helper(root, root.val);

    if (res == intMax)
        return -1;
    return res;
};