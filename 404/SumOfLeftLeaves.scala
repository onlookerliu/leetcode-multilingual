object SumOfLeftLeaves {
  class TreeNode(val _value: Int = 0) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }

  def sumOfLeftLeaves(root: TreeNode): Int = {
    def loop(root: TreeNode, isLeft: Boolean): Int = {
      if (root == null) 0
      else if (root.left == null && root.right == null && isLeft) root.value
      else loop(root.left, true) + loop(root.right, false)
    }
    loop(root, false)
  }

}
