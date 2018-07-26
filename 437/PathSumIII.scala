object PathSumIII {
  class TreeNode(val _value: Int = 0) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }

  def pathSum(root: TreeNode, sum: Int): Int = {
    var count: Int = 0
    def loop(node: TreeNode, tmp: Int): Unit = {
      if (tmp == sum) count += 1
      if (node.left != null) loop(node.left, tmp + node.left.value)
      if (node.right != null) loop(node.right, tmp + node.right.value)
    }

    loop(root, root.value)
    if (root.left != null) count += pathSum(root.left, sum)
    if (root.right != null) count += pathSum(root.right, sum)
    count
  }

}
