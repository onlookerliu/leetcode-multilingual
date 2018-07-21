object BinaryTreeZigzagLevelOrderTraversal {
  def zigzagLevelOrder(root: TreeNode): List[List[Int]] = {
    @annotation.tailrec
    def zigzagLevelOrder(currLevel: List[TreeNode], res: List[List[Int]], isReverse: Boolean): List[List[Int]] = {
      if (currLevel.isEmpty)
        res
      else {
        var nextLevel = currLevel.foldRight(List.empty[TreeNode]) { (node, ls) =>
          if (node.left != null && node.right != null)
            node.left :: node.right :: ls
          else if (node.left != null)
            node.left :: ls
          else if (node.right != null)
            node.right :: ls
          else
            ls
        }
        if (isReverse)
          zigzagLevelOrder(nextLevel, currLevel.map(_.value).reverse :: res, !isReverse)
        else
          zigzagLevelOrder(nextLevel, currLevel.map(_.value) :: res, !isReverse)
      }
    }

    if (root != null)
      zigzagLevelOrder(List(root), List(), false).reverse
    else
      Nil
  }

  class TreeNode(var _value: Int = 0) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }

}
