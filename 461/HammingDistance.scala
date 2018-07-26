object HammingDistance {
  def hammingDistance(x: Int, y: Int): Int = {
    @scala.annotation.tailrec
    def calDistance(x: Int, acc: Int): Int = {
      if (x == 0) acc
      else calDistance(x & (x - 1), acc + 1)
    }

    calDistance(x ^ y, 0)
  }
}
