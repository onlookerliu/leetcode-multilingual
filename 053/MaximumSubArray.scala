object MaximumSubArray {
  def maxSubArray(nums: Array[Int]): Int = {
    var res = Int.MinValue
    nums.foldLeft(0)((acc, num) => {
      val t = if (acc < 0) num else acc + num
      res = res max t
      t
    })
    res
  }
}