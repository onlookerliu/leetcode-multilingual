object MoveZeroes {
  def moveZeroes(nums: Array[Int]): Unit = {
    val index = nums.foldLeft(0) { (i, num) =>
      if (num != 0) {
        nums(i) = num
        i + 1
      } else i
    }

    (index until nums.length).foreach(nums(_) = 0)
  }

  def main(args: Array[String]): Unit = {
    val nums = Array(0,1,0,3,12)
    moveZeroes(nums)
    nums.foreach(println)
  }

}
