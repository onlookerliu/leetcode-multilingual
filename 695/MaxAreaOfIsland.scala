object MaxAreaOfIsland {
  def maxAreaOfIsland(grid: Array[Array[Int]]): Int = {
    var curArea: Int = 0
    var maxArea: Int = 0
    val (m, n) = (grid.length, grid.head.length)
    for (i <- 0 until m) {
      for (j <- 0 until n) {
        if (grid(i)(j) == 1) {
          curArea = area(grid, i, j)
          if (curArea > maxArea) maxArea = curArea
        }
      }
    }
    maxArea
  }

  def area(grid: Array[Array[Int]], i: Int, j: Int): Int = {
    if (grid(i)(j) != 1) 0
    else {
      grid(i)(j) = 2
      var sum: Int = 1
      if (i - 1 >= 0) sum += area(grid, i-1, j)
      if (i + 1 < grid.length) sum += area(grid, i+1, j)
      if (j - 1 >= 0) sum += area(grid, i, j-1)
      if (j + 1 < grid.head.length) sum += area(grid, i, j+1)
      sum
    }
  }

  def main(args: Array[String]): Unit = {
    val grid = Array(
      Array(0,0,1,0,0,0,0,1,0,0,0,0,0),
      Array(0,0,0,0,0,0,0,1,1,1,0,0,0),
      Array(0,1,1,0,1,0,0,0,0,0,0,0,0),
      Array(0,1,0,0,1,1,0,0,1,0,1,0,0),
      Array(0,1,0,0,1,1,0,0,1,1,1,0,0),
      Array(0,0,0,0,0,0,0,0,0,0,1,0,0),
      Array(0,0,0,0,0,0,0,1,1,1,0,0,0),
      Array(0,0,0,0,0,0,0,1,1,0,0,0,0)
    )
    println(maxAreaOfIsland(grid))
  }
}
