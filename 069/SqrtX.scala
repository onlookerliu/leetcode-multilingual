object SqrtX {
  def mySqrt(x: Int): Int = {
    @annotation.tailrec
    def newton(guess: Int): Int = {
      if (isGoodEnough(guess))
        guess
      else
        newton(improve(guess))
    }

    def isGoodEnough(guess: Long): Boolean = {
      if (guess * guess <= x && (guess + 1) * (guess + 1) > x)
        true
      else false
    }

    def improve(guess: Long): Int = ((guess + x / guess) / 2).toInt

    newton(1)
  }

  def main(args: Array[String]): Unit = {
    println(mySqrt(8))
  }

}
