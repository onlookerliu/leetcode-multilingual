object MinimumDepthOfBinaryTree {
//  def minDepth(root: TreeNode): Int = {
//    var ans: Int = 0
//    def dfs(root: TreeNode, depth: Int): Unit = {
//      if (null == root || (ans != 0 && depth >= ans)) return
//      if (root.right == null && root.right == null) {
//        ans = depth
//        return
//      }
//      if (root.left != null) dfs(root.left, depth+1)
//      if (root.right != null) dfs(root.right, depth+1)
//    }
//
//    dfs(root, 1)
//    ans
//  }

  def minDepth(root: TreeNode): Int = {
    @annotation.tailrec
    def findMinDepth(depth: Int, level: List[TreeNode]): Int = {
      val res = level.find(t => t.left == null && t.right == null)
      if (res.isDefined) depth
      else {
        val buffer = new collection.mutable.ListBuffer[TreeNode]()
        level.foreach { t =>
          if (t.left != null) buffer += t.left
          if (t.right != null) buffer += t.right
        }
        findMinDepth(depth + 1, buffer.toList)
      }
    }

    if (root == null) 0
    else findMinDepth(1, List(root))
  }

  class TreeNode(var _value: Int = 0) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }
}

