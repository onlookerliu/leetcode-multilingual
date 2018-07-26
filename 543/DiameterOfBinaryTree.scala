object DiameterOfBinaryTree {
  class TreeNode(val _value: Int = 0) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }

  def diameterOfBinaryTree(root: TreeNode): Int = {
    var res = 0

    def loop(root: TreeNode): Int = if (root == null) 0 else {
      val l = loop(root.left)
      val r = loop(root.right)
      res = res max (l + r)
      (l max r) + 1
    }

    loop(root)
    res
  }

}
