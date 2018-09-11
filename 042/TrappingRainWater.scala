object TrappingRainWater {
  def trap(height: Array[Int]): Int = {
    var leftMaxHeight = Array.empty[Int]
    var rightMaxHeight = Array.empty[Int]

    height.foldLeft(0)((item, h) => {
      val maxn = item max h
      leftMaxHeight = leftMaxHeight :+ maxn
      maxn
    })

    height.foldRight(0)((item, h) => {
      val maxn = item max h
      rightMaxHeight = maxn +: rightMaxHeight
      maxn
    })

    var water = 0
    for (i <- height.indices) {
      val minn = leftMaxHeight(i) min rightMaxHeight(i)

      if (minn > height(i)) {
        water += minn - height(i)
      }
    }

    water
  }

  def main(args: Array[String]): Unit = {
    val height = Array(0,1,0,2,1,0,1,3,2,1,2,1)
    println(trap(height))
  }
}
