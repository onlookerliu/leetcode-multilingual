object BinaryTreePostorderTraversal {
  def postorderTraversal(root: TreeNode): List[Int] = {
    @annotation.tailrec
    def postorderTraversal(stack: List[TreeNode], res: List[Int]): List[Int] = stack match {
      case h :: t =>
        val r = h.value :: res
        if (h.left != null && h.right != null)
          postorderTraversal(h.left :: h.right :: t, r)
        else if (h.right != null)
          postorderTraversal(h.right :: t, r)
        else if (h.left != null)
          postorderTraversal(h.left :: t, r)
        else
          postorderTraversal(t, r)

      case _ => res.reverse
    }

    if (root == null) List.empty
    else postorderTraversal(root :: Nil, Nil)
  }

  class TreeNode(var _value: Int = 0) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }
}
