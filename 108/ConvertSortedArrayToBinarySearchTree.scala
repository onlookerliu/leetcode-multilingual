object ConvertSortedArrayToBinarySearchTree {
//  def sortedArrayToBST(nums: Array[Int]): TreeNode = {
//    if (nums.isEmpty) null
//    else {
//      val half = (nums.length - 1)>> 1
//      val value = nums(half)
//      var root = new TreeNode(value)
//      val (l, r) = nums.zipWithIndex.partition(_._2 < half)
//      root.left = sortedArrayToBST(l.unzip._1)
//      root.right = sortedArrayToBST(r.tail.unzip._1)
//      root
//    }
//  }

  def sortedArrayToBST(nums: Array[Int]): TreeNode = {
    def dfs(start: Int, end: Int): TreeNode = {
      if (start > end) null
      else {
        val mid = (start + end) >> 1
        val root = new TreeNode(nums(mid))
        root.left = dfs(start, mid - 1)
        root.right = dfs(mid + 1, end)
        root
      }
    }

    dfs(0, nums.length - 1)
  }

  class TreeNode(var _value: Int = 0) {
    var value: Int = _value
    var left: TreeNode = null
    var right: TreeNode = null
  }

}
