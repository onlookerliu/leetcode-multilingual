object BestTimeToBuyAndSellStockIII {
  def maxProfit(prices: Array[Int]): Int = {
    var (buy1, buy2) = (Int.MinValue, Int.MinValue)
    var (sell1, sell2) = (0, 0)
    for (price <- prices) {
      if (buy1 < -price)
        buy1 = -price
      if (sell1 < buy1 + price)
        sell1 = buy1 + price
      if (buy2 < sell1 - price)
        buy2 = sell1 - price
      if (sell2 < buy2 + price)
        sell2 = buy2 + price
    }
    sell2
  }

  def main(args: Array[String]): Unit = {
    val prices = Array(3,3,5,0,0,3,1,4)
    println(maxProfit(prices))
  }

}