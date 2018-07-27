object ZigzagConversion {
  def convert(s: String, numRows: Int): String = {
    if (numRows == 1) s
    else {
      val res = Array.ofDim[Char](numRows, s.length)
      var maxCols: Int = 0

      @scala.annotation.tailrec
      def traverse(x: Int, y: Int, s: String, i: Int, numRows: Int): Unit = {
        if (i == s.length) {
          maxCols = y
          return
        } else {
          res(x)(y) = s(i)
          if (y % (numRows - 1) == 0 && x != numRows - 1)
            traverse(x + 1, y, s, i + 1, numRows)
          else
            traverse(x - 1, y + 1, s, i + 1, numRows)
        }
      }

      traverse(0, 0, s, 0, numRows)
      var str = List.empty[Char]
      for (i <- 0 until numRows) {
        for (j <- 0 to maxCols if res(i)(j).toInt != 0) {
          str = str :+ res(i)(j)
        }
      }
      str.mkString("")
    }
  }

  def main(args: Array[String]): Unit = {
    val s = "PAYPALISHIRING"
    val numRows = 3
    println(convert(s, numRows)) // "PAHNAPLSIIGYIR"
  }
}
