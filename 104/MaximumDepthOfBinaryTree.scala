object MaximumDepthOfBinaryTree {
  def maxDepth(root: TreeNode): Int =
    if (root == null) 0
    else {
      val (l, r) = (maxDepth(root.left), maxDepth(root.right))
      (l max r) + 1
    }

  class TreeNode(var _value: Int = 0) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }
}
