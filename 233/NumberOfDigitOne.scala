object NumberOfDigitOne {
  def countDigitOne(n: Int): Int = {
    var count = 0
    var factor = 1
    var cdigit = 0
    var highN = 0
    var lowN = 0
    while (n / factor > 0) {
      cdigit = (n % (factor * 10)) / factor
      highN = n / (factor * 10)
      if (cdigit == 0) count += highN * factor
      else if (cdigit == 1) count += highN * factor + lowN + 1
      else count += (highN + 1) * factor
      lowN += cdigit * factor
      factor *= 10
    }
    count
  }

  def main(args: Array[String]): Unit = {
    val n = 13
    println(countDigitOne(n))
  }
}
