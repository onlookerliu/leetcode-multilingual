object GrayCode {
  def grayCode(n: Int): List[Int] =
    if (n <= 0) List(0)
    else {
      val prev = grayCode(n - 1)
      prev ::: prev.map(i => i | (1<<(n-1)) ).reverse
    }

  def main(args: Array[String]): Unit = {
    var n = 2
    println(grayCode(n))
  }
}
