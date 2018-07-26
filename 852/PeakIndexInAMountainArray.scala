object PeakIndexInAMountainArray {
  def peakIndexInMountainArray(A: Array[Int]): Int = {
    for (i <- 1 until A.length if (A(i) > A(i-1) && A(i) > A(i+1)))
        return i
    return -1
  }

  def main(args: Array[String]): Unit = {
    val A = Array(0,2,1,0)
    println(peakIndexInMountainArray(A))
  }

}
