object MajorityElement {
  def majorityElement(nums: Array[Int]): Int = {
    var res = 0
    nums.foldLeft(0) { (count, num) =>
      if (count == 0) {
        res = num
        1
      } else if (num == res)
        count + 1
      else
        count - 1
    }

    res
  }

  def main(args: Array[String]): Unit = {
//    val nums = Array(2,2,1,1,1,2,2)
    val nums = Array(4, 3, 2, 3, 5, 3, 3)
    println(majorityElement(nums))
  }
}
