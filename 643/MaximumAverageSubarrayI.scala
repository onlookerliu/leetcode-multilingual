object MaximumAverageSubarrayI {
  def findMaxAverage(nums: Array[Int], k: Int): Double = {
    var maxAvg = Double.MinValue
    val len = nums.length
    for (start <- 0 to len - k) {
      var sum: Double = 0
      for (i <- start until start + k) {
        sum += nums(i)
      }
      if (sum/k > maxAvg) maxAvg = sum/k
    }
    maxAvg
  }

  def main(args: Array[String]): Unit = {
    val nums = Array(1,12,-5,-6,50,3)
    val k = 4
    println(findMaxAverage(nums, k))
  }
}
