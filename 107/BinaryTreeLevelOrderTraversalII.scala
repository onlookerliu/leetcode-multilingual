object BinaryTreeLevelOrderTraversalII {
  def levelOrderBottom(root: TreeNode): List[List[Int]] = {
    @annotation.tailrec
    def levelOrderBottom(currLevel: List[TreeNode], res: List[List[Int]]): List[List[Int]] =
      if (currLevel.isEmpty)
        res
      else {
        val nextLevel = currLevel.foldRight(List.empty[TreeNode]) ((node, ls) => {
          if (node.left != null && node.right != null)
            node.left :: node.right :: ls
          else if (node.left != null)
            node.left :: ls
          else if (node.right != null)
            node.right :: ls
          else
            ls
        })
        levelOrderBottom(nextLevel, currLevel.map(_.value) :: res)
      }

    if (root != null)
      levelOrderBottom(List(root), List())
    else
      Nil
  }

  class TreeNode(var _value: Int = 0) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }

}
