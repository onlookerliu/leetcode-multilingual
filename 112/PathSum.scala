object PathSum {
//  def hasPathSum(root: TreeNode, sum: Int): Boolean = {
//    if (null == root) return false
//    if (null == root.left && null == root.right) {
//      if (root.value == sum) return true
//      else return false
//    }
//
//    var hasLeftPath: Boolean = false
//    var hasRightPath: Boolean = false
//    if (root.left != null) hasLeftPath = hasPathSum(root.left, sum - root.value)
//    if (root.right != null) hasRightPath = hasPathSum(root.right, sum - root.value)
//    return hasLeftPath || hasRightPath
//  }

  def hasPathSum(root: TreeNode, sum: Int): Boolean = {
    def loop(root: TreeNode, target: Int): Boolean =
      if (root == null) false
      else if (root.left == null && root.right == null) target + root.value == sum
      else loop(root.left, target + root.value) || loop(root.right, target + root.value)

    loop(root, 0)
  }

  class TreeNode(var _value: Int = 0) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }
}
