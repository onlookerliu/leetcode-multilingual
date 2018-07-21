object InvertBinaryTree {
  def invertTree(root: TreeNode): TreeNode = {
    if (root != null) {
      val left = invertTree(root.left)
      val right = invertTree(root.right)
      root.left = right
      root.right = left
    }
    root
  }

  class TreeNode(var _value: Int = 0) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }

}
