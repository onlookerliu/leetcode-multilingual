object FloodFill {
  def floodFill(image: Array[Array[Int]], sr: Int, sc: Int, newColor: Int): Array[Array[Int]] = {
    val oldColor = image(sr)(sc)
    if (oldColor == newColor) image
    else {
      def dfs(image: Array[Array[Int]], sr: Int, sc: Int, oldColor: Int, newColor: Int): Unit = {
        if (image(sr)(sc) == oldColor) {
          image(sr)(sc) = newColor
          if (sr - 1 >= 0) dfs(image, sr - 1, sc, oldColor, newColor)
          if (sr + 1 < image.length) dfs(image, sr + 1, sc, oldColor, newColor)
          if (sc - 1 >= 0) dfs(image, sr, sc - 1, oldColor, newColor)
          if (sc + 1 < image.head.length) dfs(image, sr, sc + 1, oldColor, newColor)
        }
      }

      dfs(image, sr, sc, oldColor, newColor)
      image
    }


  }


  def main(args: Array[String]): Unit = {
    val image = Array(
      Array(1, 1, 1),
      Array(1, 1, 0),
      Array(1, 0, 1)
    )
    println("Before")
    image.foreach(row => {
      row.foreach(print)
      println()
    })

    val (sr, sc, newColor) = (1, 1, 2)
    floodFill(image, sr, sc, newColor)
    println("After")
    image.foreach(row => {
      row.foreach(print)
      println()
    })
  }
}

