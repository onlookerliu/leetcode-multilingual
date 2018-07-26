/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {
    if (!t1) return t2;
    if (!t2) return t1;
    let curr = new TreeNode(t1.val + t2.val);
    curr.left = mergeTrees(t1.left, t2.left);
    curr.right = mergeTrees(t1.right, t2.right);
    return curr;
};