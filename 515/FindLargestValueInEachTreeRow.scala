object FindLargestValueInEachTreeRow {
  class TreeNode(val _value: Int = 0) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }

  def largestValues(root: TreeNode): List[Int] = if (root == null) Nil else {
    val res = new collection.mutable.ListBuffer[Int]

    @scala.annotation.tailrec
    def loop(row: List[TreeNode]): Unit = if (row.nonEmpty) {
      val (nextRow, maxValue) = row.foldLeft((List.empty[TreeNode], Int.MinValue)) { case ((r, v), node) =>
          val t = v max node.value
          if (node.left != null && node.right != null)
            (node.left :: node.right :: r, t)
          else if (node.right != null)
            (node.right :: r, t)
          else if (node.left != null)
            (node.left :: r, t)
          else (r, t)
      }
      res += maxValue
      loop(nextRow)
    }

    loop(List(root))
    res.toList
  }

}
