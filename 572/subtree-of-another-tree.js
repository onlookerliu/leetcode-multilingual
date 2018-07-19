/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
    const isSameTree = function (p, q) {
        if (p != null && q != null) {
            if (p.val == q.val)
                return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
            else return false;
        } else if (p == null && q == null) {
            return true;
        } else return false;
    };

    if (s == null && t == null)
        return true;
    else {
        if (isSameTree(s, t))
            return true;
        else if (s.left != null && s.right != null)
            return isSubtree(s.left, t) || isSubtree(s.right, t);
        else if (s.left != null)
            return isSubtree(s.left, t);
        else if (s.right != null)
            return isSubtree(s.right, t);
        else
            return false;
    }
};
