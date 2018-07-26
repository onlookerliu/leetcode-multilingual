object MaximizeDistanceToClosestPerson {
  def maxDistToClosest(seats: Array[Int]): Int = {
    var res = List.empty[Int]
    val len = seats.length
    for (i <- 0 until len if seats(i) != 1) {
      var (left, right) = (0, 0)
      var dist = 0
      if (i > 0)
        while (seats(i - left) == 0)
          left += 1
      if (i < len - 1)
        while (seats(i + right) == 0)
          right += 1

      if (left == 0) dist = right
      else if (right == 0) dist = left
      else dist = if (left > right) right else left
      res = res :+ dist
    }
    res.max
  }

  def main(args: Array[String]): Unit = {
    val seats = Array(1, 0, 0, 0, 1, 0, 1)
    println(maxDistToClosest(seats))
  }

}
