object MaximumProductSubarray {
  def maxProduct(nums: Array[Int]): Int = {
    var (lower, upper) = (1, 1)
    var lowerMul: Int = 0
    var upperMul: Int = 0
    var res: Int = Integer.MIN_VALUE
    for (num <- nums) {
      lowerMul = lower * num
      upperMul = upper * num
      lower = lowerMul min upperMul min 1
      upper = lowerMul max upperMul max 1
      res = res max lowerMul max upperMul
    }
    res
  }

  def main(args: Array[String]): Unit = {
    val nums = Array(-2,0,-1)
    println(maxProduct(nums))
  }

}