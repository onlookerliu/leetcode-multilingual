object MinCostClimbingStairs {
  def minCostClimbingStairs(cost: Array[Int]): Int = {
    val len = cost.length
    val dp = Array.fill(len+1)(0)
    for (i <- 2 to len) {
      dp(i) = (dp(i - 2) + cost(i - 2)) min (dp(i - 1) + cost(i - 1))
    }
    dp(len)
  }

  def main(args: Array[String]): Unit = {
    val cost = Array(1, 100, 1, 1, 1, 100, 1, 1, 100, 1)
    println(minCostClimbingStairs(cost))
  }
}
