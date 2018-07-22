object UglyNumberII {
  def nthUglyNumber(n: Int): Int = {
    val dp = Array.ofDim[Int](n)
    var (i, j, k) = (0, 0, 0)
    dp(0) = 1
    for (l <- 1 until n) {
      dp(l) = dp(i)*2 min dp(j)*3 min dp(k)*5
      if (dp(l) == dp(i)*2) i = i+1
      if (dp(l) == dp(j)*3) j = j+1
      if (dp(l) == dp(k)*5) k = k+1
    }
    dp(n-1)
  }

  def main(args: Array[String]): Unit = {
    val n = 1000
    println(nthUglyNumber(n))
  }
}
