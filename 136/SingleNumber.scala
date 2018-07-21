object SingleNumber {
  def singleNumber(nums: Array[Int]): Int =
    nums.foldLeft(0)((res, num) => res ^ num)

  def main(args: Array[String]): Unit = {
    val nums = Array(4,1,2,1,2)
    println(singleNumber(nums))
  }
}
