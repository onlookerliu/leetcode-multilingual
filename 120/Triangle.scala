object Triangle {
  def minimumTotal(triangle: List[List[Int]]): Int = {
    val n = triangle.length + 1
//    var dp = scala.collection.mutable.ArrayBuffer.fill(n,n)(0)
    val dp = Array.ofDim[Int](n, n)
    for (i <- 1 until n) dp(n-1)(i) = 0
    for (i <- n-1 to 0) {
      for (j <- triangle(i).indices) {
        dp(i)(j) = triangle(i)(j) + (dp(i+1)(j) min dp(i+1)(j))
      }
    }
    dp(0)(0)
  }

  def main(args: Array[String]): Unit = {
    val triangle = List(
      List(2),
      List(3, 4),
      List(6, 5, 7),
      List(4, 1, 8, 3)
    )
    println(minimumTotal(triangle))
  }
}
