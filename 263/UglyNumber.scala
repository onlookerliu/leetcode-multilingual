object UglyNumber {
  @annotation.tailrec
  def isUgly(num: Int): Boolean = num match {
    case 0 => false
    case 1 => true
    case x if x % 2 == 0 => isUgly(num / 2)
    case x if x % 3 == 0 => isUgly(num / 3)
    case x if x % 5 == 0 => isUgly(num / 5)
    case _ => false
  }

  def main(args: Array[String]): Unit = {
    val num = 8
    println(isUgly(num))
  }
}
