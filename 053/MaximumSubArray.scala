object MaximumSubArray {
  def maxSubArray(nums: Array[Int]): Int = {
    var res = Int.MinValue
    nums.foldLeft(0) { (acc, num) =>
      var t = if (acc < 0) num else acc + num
      res = res max t
      t
    }
    res
  }

  def main(args: Array[String]): Unit = {
    var nums = Array(-2,1,-3,4,-1,2,1,-5,4)
    println(maxSubArray(nums))
  }

}
