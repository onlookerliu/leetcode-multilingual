object Base7 {
  def convertToBase7(num: Int): String = if (num == 0) "0" else {
    var res = StringBuilder.newBuilder
    @scala.annotation.tailrec
    def loop(num: Int): String =
      if (num == 0) res.toString().reverse
      else {
        res.append(num % 7)
        loop(num / 7)
      }

    if (num < 0) "-" + loop(-num) else loop(num)
  }

  def main(args: Array[String]): Unit = {
    val num = -7
    println(convertToBase7(num))
  }

}
