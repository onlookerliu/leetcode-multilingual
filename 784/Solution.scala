object Solution {
  def letterCasePermutation(S: String): List[String] = {
    if (S.length == 0) return List(S)
    if (S.length == 1) {
      if (S(0) >= '0' && S(0) <= '9') return List(S)
      else return List(S.toLowerCase, S.toUpperCase)
    }

    val tails = letterCasePermutation(S.tail)
    var heads = List.empty[Char]
    if (S(0) >= '0' && S(0) <= '9')
      heads = heads :+ S(0)
    else
      heads = heads ++ List(S(0).toLower, S(0).toUpper)

    var res = List.empty[String]
    for (head <- heads)
      for (tail <- tails)
        res = res :+ (head + tail)
    res
  }

  def main(args: Array[String]): Unit = {
    val S = "1a2b"
    println(letterCasePermutation(S))
  }
}
