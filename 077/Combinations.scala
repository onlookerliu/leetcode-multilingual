import scala.collection.mutable.Buffer

object Combinations {
  def combine(n: Int, k: Int): List[List[Int]] = {
    val combination = Buffer.fill(k){0}
    var res = List.empty[List[Int]]

    def dfs(idx: Int, begin: Int): Unit = {
      if (idx == k) {
        res = res :+ combination.toList
        return
      } else {
        for (i <- begin to n+1-k+idx) {
          combination(idx) = i
          dfs(idx+1, i+1)
        }
      }
    }

    dfs(0, 1)
    res
  }

  def main(args: Array[String]): Unit = {
    val (n, k) = (4, 2)
    println(combine(n, k))
  }
}
