object WaterAndJugProblem {
  def canMeasureWater(x: Int, y: Int, z: Int): Boolean = {
    z == 0 || (x + y >= z && z % gcd(x, y) == 0)
  }

  @annotation.tailrec
  def gcd(x: Int, y: Int): Int = {
    if (y == 0) x
    else gcd(y, x % y)
  }

  def main(args: Array[String]): Unit = {
    println(canMeasureWater(3, 5, 4))
  }
}
