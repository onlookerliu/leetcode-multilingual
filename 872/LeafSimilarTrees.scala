object LeafSimilarTrees {
  class TreeNode(val _value: Int = 0) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }

  def leafSimilar(root1: TreeNode, root2: TreeNode): Boolean = {
    def getLeaves(root: TreeNode): List[Int] = {
      if (root == null) List.empty[Int]
      else if (root.left == null && root.right == null) List(root.value)
      else getLeaves(root.left) ++ getLeaves(root.right)
    }
    getLeaves(root1) == getLeaves(root2)
  }

  def main(args: Array[String]): Unit = {
    val root1 = new TreeNode(1)
    val root2 = new TreeNode(2)
    println(leafSimilar(root1, root2))
  }

}
