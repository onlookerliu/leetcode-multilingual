object ConstructBinaryTreeFromPreorderAndInorderTraversal {
//  def buildTree(preOrder: List[Int], inorder: List[Int]): TreeNode = {
//    def dfs(index: Int, startPos: Int, endPos: Int): TreeNode = {
//      if (startPos > endPos) null
//      else {
//        var node = new TreeNode(preOrder(index))
//        var pos = inorder.indexOf(preOrder(index), startPos)
//        node.left = dfs(index + 1, startPos, pos - 1)
//        node.right = dfs(index + 1 + pos - endPos, pos + 1, endPos)
//        node
//      }
//    }
//    dfs(0, 0, inorder.length-1)
//  }

  def buildTree(preorder: List[Int], inorder: List[Int]): TreeNode = {
    def buildTree(preOrderIndexed: List[(Int, Int)], preOrderStart: Int, preOrderEnd: Int, inOrderIndexed: List[(Int, Int)], inOrderStart: Int, inOrderEnd: Int): TreeNode =
      if (preOrderStart > preOrderEnd) null
      else {
        val value = preOrderIndexed(preOrderStart)._1
        val root = new TreeNode(value)
        val pos = inOrderIndexed.find(_._1 == value) match {
          case Some((_, i)) => i
        }
        val leftTreeLen = pos - inOrderStart
        root.left = buildTree(preOrderIndexed, preOrderStart + 1, preOrderStart + leftTreeLen, inOrderIndexed, inOrderStart, pos - 1)
        root.right = buildTree(preOrderIndexed, preOrderStart + leftTreeLen + 1, preOrderEnd, inOrderIndexed, pos + 1, inOrderEnd)
        root
      }

    buildTree(preorder.zipWithIndex, 0, preorder.length - 1, inorder.zipWithIndex, 0, inorder.length - 1)
  }

  class TreeNode(var _value: Int = 0) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }

}
