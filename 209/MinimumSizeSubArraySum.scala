object MinimumSizeSubArraySum {
  def minSubArrayLen(s: Int, nums: Array[Int]): Int = {
    val len = nums.length

    @annotation.tailrec
    def findMinLen(low: Int, high: Int, sum: Int, minLen: Int): Int = {
      if (high >= len) {
        if (low < len && sum - nums(low) >= s) findMinLen(low+1, high, sum - nums(low), minLen min (high - low))
        else if (minLen != Int.MaxValue || sum >= s) minLen min (high - low)
        else 0
      }
      else if (sum < s) findMinLen(low, high + 1, sum + nums(high), minLen)
      else findMinLen(low+1, high, sum - nums(low), minLen min (high - low))
    }

    findMinLen(0, 0, 0, Int.MaxValue)
  }

  def main(args: Array[String]): Unit = {
    val s = 7
    val nums = Array(2,3,1,2,4,3)
    println(minSubArrayLen(s, nums))
  }
}
