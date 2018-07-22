object PerfectSquares {
  def numSquares(n: Int): Int = {
    val hash = Array.fill(n+1)(Int.MaxValue)
    hash(0) = 0

    for (i <- 0 to n) {
      for (j <- 1 to n if i + j*j <= n) {
        hash(i+j*j) = hash(i+j*j) min (hash(i) + 1)
      }
    }
    hash(n)
  }

  def main(args: Array[String]): Unit = {
    val n = 13
    println(numSquares(n))
  }
}
