object BinaryTreePreorderTraversal {
  def preorderTraversal(root: TreeNode): List[Int] = {
    @annotation.tailrec
    def preorderTraversal(stack: List[TreeNode], res: List[Int]): List[Int] = stack match {
      case h :: t =>
        val r = h.value :: res
        if (h.right != null && h.left != null)
          preorderTraversal(h.left :: h.right :: t, r)
        else if (h.right != null)
          preorderTraversal(h.right :: t, r)
        else if (h.left != null)
          preorderTraversal(h.left :: t, r)
        else
          preorderTraversal(t, r)

      case _ => res.reverse
    }

    if (root == null) List.empty
    else preorderTraversal(root :: Nil, Nil)
  }

  class TreeNode(var _value: Int = 0) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }
}
