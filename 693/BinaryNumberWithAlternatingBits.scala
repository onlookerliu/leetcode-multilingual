object BinaryNumberWithAlternatingBits {
  def hasAlternatingBits(n: Int): Boolean = {
    def hasOnlyOneBit(n: Int): Boolean =
      (n & (n - 1)) == 0

    val t = n ^ (n >> 1)
    hasOnlyOneBit(t ^ (t >> 1))
  }

  def main(args: Array[String]): Unit = {
    val n = 5
    println(hasAlternatingBits(n))
  }
}
