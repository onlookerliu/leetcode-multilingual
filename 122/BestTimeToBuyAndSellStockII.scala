object BestTimeToBuyAndSellStockII {
  def maxProfit(prices: Array[Int]): Int = {
    val n = prices.length
    if (n == 0)
      return 0
    val buy = Array.fill[Int](n)(0)
    val sell = Array.fill[Int](n)(0)
    for (i <- 0 until n) {
      if (i == 0) {
        buy(i) = -prices(i)
        sell(i) = 0
      } else {
        buy(i) = buy(i-1) max (sell(i-1) - prices(i))
        sell(i) = sell(i-1) max (buy(i-1) + prices(i))
      }
    }
    return sell(n-1)
  }

  def main(args: Array[String]): Unit = {
    val prices = Array(7,1,5,3,6,4)
    println(maxProfit(prices))
  }
}
