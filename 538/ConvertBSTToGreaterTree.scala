object ConvertBSTToGreaterTree {
  class TreeNode(val _value: Int = 0) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }

  def convertBST(root: TreeNode): TreeNode = {
    var total = 0
    def dfs(node: TreeNode): Unit = {
      if (node == null) return
      else {
        dfs(node.right)
        node.value += total
        total = node.value
        dfs(node.left)
      }
    }
    dfs(root)
    root
  }

}
