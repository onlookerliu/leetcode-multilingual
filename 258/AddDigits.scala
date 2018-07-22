object AddDigits {
  def addDigits(_num: Int): Int = {
    var num = _num
    while (num >= 10) {
      var sum = 0
      while (num > 0) {
        sum += num % 10
        num = num / 10
      }
      num = sum
    }

    num
  }

  def main(args: Array[String]): Unit = {
    val num = 38
    println(addDigits(num))
  }
}
