object BinaryTreeInOrderTraversal {
  def inorderTraversal(root: TreeNode): List[Int] = {
    var ans = List.empty[Int]
    def dfs(root: TreeNode): Unit = {
      if (null == root) Unit
      else {
        dfs(root.left)
        ans = ans :+ root.value
        dfs(root.right)
      }
    }
    dfs(root)
    ans
  }

  class TreeNode(var _value: Int) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }

  def main(args: Array[String]): Unit = {
    val first = new TreeNode(1)
    val second = new TreeNode(2)
    val third = new TreeNode(3)
    second.left = third
    first.right = second
    println(inorderTraversal(first))
  }

}
