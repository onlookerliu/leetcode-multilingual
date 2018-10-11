/**
 * Definition for a binary tree node.
 * class TreeNode(var _value: Int) {
 *   var value: Int = _value
 *   var left: TreeNode = null
 *   var right: TreeNode = null
 * }
 */
object Solution {
    def searchBST(root: TreeNode, `val`: Int): TreeNode = {
        if (root == null)
            return null
        if (root.value == `val`)
            return root
        else if (root.value > `val`)
            return searchBST(root.left, `val`)
        else
            return searchBST(root.right, `val`)
    }
}