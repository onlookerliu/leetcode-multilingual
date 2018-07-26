object TwoSumIVInputIsBST {
  class TreeNode(val _value: Int) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }

  def findTarget(root: TreeNode, k: Int): Boolean = {
    var s = collection.mutable.Set.empty[Int]

    def dfs(node: TreeNode): Boolean = {
      if (node == null) false
      else {
        if (s.contains(k - node.value)) true
        else {
          s = s + node.value
          dfs(node.left) || dfs(node.right)
        }
      }
    }

    dfs(root)
  }

}
