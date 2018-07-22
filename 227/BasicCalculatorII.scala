object BasicCalculatorII {
  def calculate(s: String): Int = {
    var length = s.length

    def findNextNotDigit(i: Int): Int =
      (i until length).find(!s(_).isDigit).getOrElse(length)

    def findNextNotSpace(i: Int): Int =
      (i until length).find(!s(_).isSpaceChar).getOrElse(length)

    def evalute(valueStack: List[Int], operatorStack: List[Char]): Int = operatorStack match {
      case(op :: os) => valueStack match {
        case (x :: y :: xs) => if (op == '+') evalute((x + y) :: xs, os) else evalute((x - y) :: xs, os)
      }
      case Nil =>valueStack.head
    }

    @annotation.tailrec
    def loop(i: Int, valueStack: List[Int], operatorStack: List[Char]): Int =
      if (i >= length) evalute(valueStack.reverse, operatorStack.reverse)
      else if (s(i) == ' ') loop(i+1, valueStack, operatorStack)
      else if (s(i) == '+' || s(i) == '-') loop(i + 1, valueStack, s(i) :: operatorStack)
      else if (s(i) == '*' || s(i) == '/') {
        val start = findNextNotSpace(i + 1)
        val end = findNextNotDigit(start)
        val value = s.substring(start, end).toInt
        valueStack match {
          case x :: xs =>
            if (s(i) == '*') loop(end, (x * value) :: xs, operatorStack) else loop(end, (x / value) :: xs, operatorStack)
        }
      } else {
        val end = findNextNotDigit(i)
        val value = s.substring(i, end).toInt
        loop(end, value :: valueStack, operatorStack)
      }

    loop(0, List(), List())
  }

  def main(args: Array[String]): Unit = {
    val s = "3+2*2"
    println(calculate(s))
  }
}
