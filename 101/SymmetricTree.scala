/**
 * Definition for a binary tree node.
 * class TreeNode(var _value: Int) {
 *   var value: Int = _value
 *   var left: TreeNode = null
 *   var right: TreeNode = null
 * }
 */
object Solution {

  def isSymmetric(root: TreeNode): Boolean = {
    def isMirror(root1: TreeNode, root2: TreeNode): Boolean = (root1, root2) match {
      case (null, null) => true
      case (null, _) => false
      case (_, null) => false
      case _ => (root1.value == root2.value) && isMirror(root1.left, root2.right) && isMirror(root1.right, root2.left)
    }
    if (null == root) true
    else isMirror(root.left, root.right)
  }

}