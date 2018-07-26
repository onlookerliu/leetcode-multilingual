/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function (t) {
    if (!t) {
        return '';
    }

    let subLeft = (t.left || t.right) ? `(${tree2str(t.left)})` : '';
    let subRight = t.right ? `(${tree2str(t.right)})` : '';

    return `${t.val}` + subLeft + subRight;
};