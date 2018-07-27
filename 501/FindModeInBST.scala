object FindModeInBST {
  def findMode(root: TreeNode): Array[Int] = {
    var res = Array.empty[Int]
    var currCount = 0
    var maxCount = 1
    var pre: TreeNode = null

    def dfs(root: TreeNode): Unit = {
      if (root == null) return
      else {
        dfs(root.left)
        if (null != pre && root.value == pre.value) {
          currCount += 1
        } else {
          currCount = 1
        }
        if (currCount == maxCount)
          res = res :+ root.value
        if (currCount > maxCount) {
          maxCount = currCount
          res = Array.empty[Int]
          res = res :+ root.value
        }
        pre = root
        dfs(root.right)
      }
    }

    dfs(root)
    res
  }

}
