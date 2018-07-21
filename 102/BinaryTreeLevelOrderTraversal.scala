object BinaryTreeLevelOrderTraversal {
  def levelOrder(root: TreeNode): List[List[Int]] = {
    @annotation.tailrec
    def levelOrder(currLevel: List[TreeNode], res: List[List[Int]]): List[List[Int]] =
      if (currLevel.isEmpty)
        res
      else {
        var nextLevel = currLevel.foldRight(List.empty[TreeNode]) ( (node, ls) => {
          if (node.left != null && node.right != null)
            node.left :: node.right :: ls
          else if (node.left != null)
            node.left :: ls
          else if (node.right != null)
            node.right :: ls
          else
            ls
        })
        levelOrder(nextLevel, currLevel.map(_.value) :: res)
      }

    if (root != null)
      levelOrder(List(root), List()).reverse
    else
      Nil
  }

  class TreeNode(var _value: Int = 0) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }
}
