object CountAndSay {
  def countAndSay(n: Int): String = {
    if (n == 1) {
      return "1"
    }

    val str = countAndSay(n-1) + "$"
    val arr = str.split("")
    val len = arr.length
    var count = 1
    var res = ""

    for (i <- 0 until len-1) {
      if (arr(i) == arr(i+1)) {
        count += 1
      } else {
        res += (count.toString + arr(i))
        count = 1
      }
    }

    res
  }

  def main(args: Array[String]): Unit = {
    val n = 5
    println(countAndSay(n))
  }
}
