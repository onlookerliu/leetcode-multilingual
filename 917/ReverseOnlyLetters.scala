object ReverseOnlyLetters {
  def reverseOnlyLetters(S: String): String = {
    def isAlpha(ch: Char): Boolean = {
      ch.getClass.getSimpleName == "char" && (ch <= 'z' && ch >= 'a' || ch <= 'Z' && ch >= 'A')
    }

    var l = S.length - 1
    var res = List.empty[Char]
    for (ch <- S) {
      if (isAlpha(ch)) {
        while (!isAlpha(S(l)))
          l -= 1
        res = res :+ S(l)
        l -= 1
      } else
        res = res :+ ch
    }
    res.mkString("")
  }

  def main(args: Array[String]): Unit = {
    val S = "ab-cd"
    println(reverseOnlyLetters(S))
  }

}