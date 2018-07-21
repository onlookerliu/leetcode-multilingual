object ConstructBinaryTreeFromInorderAndPostorderTraversal {
    def buildTree(inorder: Array[Int], postorder: Array[Int]): TreeNode = {
      def dfs(index: Int, startPos: Int, endPos: Int): TreeNode = {
        if (startPos > endPos) null
        else {
          val node = new TreeNode(postorder(index))
          val pos = inorder.indexOf(postorder(index), startPos)

          node.left = dfs(index - 1 - (pos - startPos), startPos, pos - 1)
          node.right = dfs(index - 1, pos + 1, endPos)
          node
        }
      }

      dfs(postorder.length - 1, 0, inorder.length - 1)
    }

//  def buildTree(inorder: Array[Int], postorder: Array[Int]): TreeNode = {
//    def buildTree(inOrder: Array[Int], inOrderStart: Int, inOrderEnd: Int, postOrder: Array[Int], postOrderStart: Int, postOrderEnd: Int): TreeNode = {
//      if (inOrderStart > inOrderEnd) null
//      else {
//        val value = postOrder(postOrderEnd)
//        val root = new TreeNode(value)
//        val pos = inOrder.indexOf(value, inOrderStart)
//        val leftTreeLen = pos - inOrderStart
//        root.left = buildTree(inOrder, inOrderStart, pos - 1, postOrder, postOrderStart, postOrderStart + leftTreeLen - 1)
//        root.right = buildTree(inOrder, pos + 1, inOrderEnd, postOrder, postOrderStart + leftTreeLen, postOrderEnd - 1)
//        root
//      }
//    }
//    buildTree(inorder, 0, inorder.length - 1, postorder, 0, postorder.length - 1)
//  }

  class TreeNode(var _value: Int = 0) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }
}