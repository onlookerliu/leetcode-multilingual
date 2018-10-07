import scala.collection.mutable

object HasGroupsSizeX {
  def hasGroupsSizeX(deck: Array[Int]): Boolean = {
    val counts = mutable.HashMap[Int, Int]()
    deck.foreach(card => {
      counts(card) = counts.getOrElse(card, 0) + 1
    })
    var X = deck.length
    for (key <- counts.keySet) {
      X = gcd(X, counts(key))
    }
    X >= 2
  }

  @scala.annotation.tailrec
  private def gcd(a: Int, b: Int): Int = {
    if (b == 0)
      return a
    return gcd(b, a%b)
  }

  def main(args: Array[String]): Unit = {
    val deck = Array(1,2,3,4,4,3,2,1)
    println(hasGroupsSizeX(deck))
  }
}