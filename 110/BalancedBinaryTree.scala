object BalancedBinaryTree {
  def isBalanced(root: TreeNode): Boolean = {
    def isBalanced(root: TreeNode): (Boolean, Int) =
      if (root == null)
        (true, 0)
      else {
        val (lb, lh) = isBalanced(root.left)
        val (rb, rh) = isBalanced(root.right)
        if (!lb || !rb)
          (false, 0)
        else if ((lh - rh).abs > 1)
          (false, 0)
        else
          (true, (lh max rh) + 1)
      }

    isBalanced(root)._1
  }

  class TreeNode(var _value: Int = 0) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }
}
