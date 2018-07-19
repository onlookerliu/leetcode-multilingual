object SearchA2DMatrix {
  def searchMatrix(matrix: Array[Array[Int]], target: Int): Boolean =
    if (matrix.nonEmpty && matrix.head.nonEmpty) {
      val m = matrix.length
      val n = matrix.head.length

      @annotation.tailrec
      def search(x: Int, y: Int): Boolean = if (x >= 0 && x < m && y >= 0 && y < n) {
        if (matrix(x)(y) == target) true
        else if (matrix(x)(y) < target) search(x+1, y)
        else search(x, y-1)
      } else false

      search(0, n-1)
    } else false

  def main(args: Array[String]): Unit = {
    val matrix = Array(
      Array(1, 3, 5, 7),
      Array(10, 11, 16, 20),
      Array(23, 30, 34, 50)
    )
    val target = 13
    println(searchMatrix(matrix, target))
  }
}
