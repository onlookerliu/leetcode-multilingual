object ContainerWithMostWater {
  def maxArea(height: Array[Int]): Int = {
    var l = 0
    var r = height.length - 1
    var area = 0
    var h = 0
    while (l < r) {
      h = height(l) min height(r)
      area = area max h * (r - l)
      while (height(l) <= h && l < r)
        l += 1
      while (height(r) <= h && l < r)
        r -= 1
    }
    area
  }

  def main(args: Array[String]): Unit = {
//    var height = Array(1, 2, 4, 3)
    var height = Array(1, 8, 6, 2, 5, 4, 8, 3, 7)
    println(maxArea(height))
  }

}
