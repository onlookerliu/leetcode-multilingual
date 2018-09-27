object SearchInsertPosition {
  def searchInsert(nums: Array[Int], target: Int): Int = {
    var i: Int = 0
    while (i < nums.length && nums(i) <= target) {
      if (nums(i) == target) {
        return i
      }
      i += 1
    }
    return i
  }

  def main(args: Array[String]): Unit = {
    val nums = Array(1, 3, 5, 6)
    val target = 5
    println(searchInsert(nums, target))
  }

}
