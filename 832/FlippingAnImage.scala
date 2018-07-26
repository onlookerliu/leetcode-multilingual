object FlippingAnImage {
  def flipAndInvertImage(A: Array[Array[Int]]): Array[Array[Int]] = {
    A.map(arr => arr.reverse).map(arr => arr.map(e => e ^ 1))
  }

  def main(args: Array[String]): Unit = {
    val A = Array(
      Array(1,1,0),
      Array(1,0,1),
      Array(0,0,0)
    )
    flipAndInvertImage(A).foreach(arr => {
      arr.foreach(print)
      println()
    })
  }
}
