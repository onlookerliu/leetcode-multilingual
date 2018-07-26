object PositionOfLargeGroups {
  def largeGroupPositions(S: String): List[List[Int]] = {
    var preIndex = 0
    var preChar = S(0)
    var res = List.empty[List[Int]]
    for (i <- 0 until S.length) {
      val item = S(i)
      if (item != preChar) {
        if (i - preIndex >= 3)
          res = List(preIndex, i - 1) :: res
        preIndex = i
        preChar = item
      }
    }
    if (S.length - preIndex >= 3)
      res = List(preIndex, S.length - 1) :: res

    res.reverse
  }

  def main(args: Array[String]): Unit = {
    val S = "abcdddeeeeaabbbcd"
    largeGroupPositions(S).foreach(ls => {
      ls.foreach(print)
      println()
    })
  }

}
