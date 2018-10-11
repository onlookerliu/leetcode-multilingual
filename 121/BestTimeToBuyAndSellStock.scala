object BestTimeToBuyAndSellStock {
  def maxProfit(prices: Array[Int]): Int = {
    var minBuys = Array.empty[Int]
    var maxSells = Array.empty[Int]
    prices.foldLeft(Int.MaxValue)((minBuy, p) => {
      val minn = minBuy min p
      minBuys = minBuys :+ minn
      minn
    })
    prices.foldRight(Int.MinValue)((maxSell, p) => {
      val maxn = maxSell max p
      maxSells = maxn +: maxSells
      maxn
    })
    minBuys.zip(maxSells).foldLeft(0) {
      case (res, (minBuy, maxSell)) => res max (maxSell - minBuy)
    }
  }

  def main(args: Array[String]): Unit = {
    val prices = Array(7,1,5,3,6,4)
    println(maxProfit(prices))
  }

}