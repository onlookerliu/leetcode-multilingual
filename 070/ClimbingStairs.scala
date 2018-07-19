object ClimbingStairs {
  var cache: Map[Int, Int] = Map(0 -> 1, 1 -> 1)

  def climbStairs(n: Int): Int =
    if (cache.contains(n)) cache(n)
    else {
      val steps = climbStairs(n - 2) + climbStairs(n - 1)
      cache += (n -> steps)
      steps
    }

  def main(args: Array[String]): Unit = {
    val n = 3
    println(climbStairs(n))
  }
}
