object FirstMissingPositive {
  def firstMissingPositive(nums: Array[Int]): Int = {
    for (i <- nums.indices) {
      while (0 <= nums(i)-1 && nums(i)-1 < nums.length && nums(i) != nums(nums(i)-1)) {
        val temp = nums(i)
        nums(i) = nums(temp - 1)
        nums(temp - 1) = temp
      }
    }

    for (i <- nums.indices) {
      if (nums(i) != i+1) {
        return i+1
      }
    }
    return nums.length + 1
  }

  def main(args: Array[String]): Unit = {
    val nums = Array(1, 2, 4, 5)
    println(firstMissingPositive(nums))
  }
}
