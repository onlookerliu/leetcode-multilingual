object FindTheDifference {
  def findTheDifference(s: String, t: String): Char = {
    val m = s.foldLeft(Map.empty[Char, Int]) { (map, char) =>
      map.updated(char, map.getOrElse(char, 0) + 1)
    }
    t.foldLeft(m) { (map, char) =>
      map.updated(char, map.getOrElse(char, 0) - 1)
    }.find(_._2 != 0).get._1
  }

  def main(args: Array[String]): Unit = {
    val s = "abcd"
    val t = "abcde"
    println(findTheDifference(s, t))
  }

}
