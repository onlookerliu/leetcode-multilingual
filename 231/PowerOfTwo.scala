object PowerOfTwo {
  def isPowerOfTwo(n: Int): Boolean =
    if (n <= 0) false
    else (n & (n - 1)) == 0

  def main(args: Array[String]): Unit = {
    val n = 256
    println(isPowerOfTwo(n))
  }
}