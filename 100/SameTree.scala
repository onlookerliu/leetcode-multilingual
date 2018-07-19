/**
 * Definition for a binary tree node.
 * class TreeNode(var _value: Int) {
 *   var value: Int = _value
 *   var left: TreeNode = null
 *   var right: TreeNode = null
 * }
 */
object SameTree {
    def isSameTree(p: TreeNode, q: TreeNode): Boolean = {
        if (p != null && q != null) {
            if (p.value == q.value) isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
            else false
        } else if (p == null && q == null) true else false
    }
}