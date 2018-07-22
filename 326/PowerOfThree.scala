object PowerOfThree {
  val s = Set(1, 3, 9, 27, 81, 243, 729, 2187, 6561, 19683, 59049, 17747, 531441, 1594323, 4782969, 1434907, 43046721, 129140163, 387420489, 1162261467)

  def isPowerOfThree(n: Int): Boolean = s.contains(n)

  def main(args: Array[String]): Unit = {
    val n = 27
    println(isPowerOfThree(n))
  }

}
