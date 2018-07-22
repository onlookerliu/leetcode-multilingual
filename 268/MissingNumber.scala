object MissingNumber {
  def missingNumber(nums: Array[Int]): Int = {
    val t = (0 to nums.length).foldLeft(0)(_ ^ _)
    nums.foldLeft(t)(_ ^ _)
  }

  def main(args: Array[String]): Unit = {
    val nums = Array(9,6,4,2,3,5,7,0,1)
    println(missingNumber(nums))
  }
}
